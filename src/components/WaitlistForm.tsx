import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { useToast } from '@/hooks/use-toast';
import { supabase } from '@/integrations/supabase/client';

interface WaitlistFormProps {
  isOpen: boolean;
  onClose: () => void;
}

export const WaitlistForm: React.FC<WaitlistFormProps> = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Insert data into Supabase
      const { error } = await supabase
        .from('waitlist')
        .insert([{
          name: formData.name,
          email: formData.email
        }]);

      if (error) {
        throw error;
      }

      toast({
        title: "You're on the list! 🎉",
        description: "Thanks for joining our waitlist. We'll keep you posted with updates soon!",
      });


      // Reset form
      setFormData({
        name: '',
        email: ''
      });

      onClose();
    } catch (error) {
      toast({
        title: "Error",
        description: "Something went wrong. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-md bg-black border-white/20 [&>button]:text-white [&>button]:hover:text-gray-300">
        <DialogHeader>
          <DialogTitle className="text-xl font-semibold text-center text-white">Join Our Waitlist</DialogTitle>
        </DialogHeader>
        
        <form onSubmit={handleSubmit} className="space-y-4 mt-4">
          <div className="space-y-2">
            <Label htmlFor="name" className="text-white">Name *</Label>
            <Input
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Your full name"
              required
              className="bg-[#292929] border-white/20 text-white placeholder-gray-400"
            />
          </div>

          {/* <div className="space-y-2">
            <Label htmlFor="organization" className="text-white">Organization *</Label>
            <Input
              id="organization"
              name="organization"
              value={formData.organization}
              onChange={handleChange}
              placeholder="Company or organization name"
              required
              className="bg-[#292929] border-white/20 text-white placeholder-gray-400"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="purpose" className="text-white">Purpose *</Label>
            <Textarea
              id="purpose"
              name="purpose"
              value={formData.purpose}
              onChange={handleChange}
              placeholder="How do you plan to use our product?"
              required
              className="bg-[#292929] border-white/20 text-white placeholder-gray-400 min-h-[80px]"
            />
          </div> */}

          <div className="space-y-2">
            <Label htmlFor="email" className="text-white">Email *</Label>
            <Input
              id="email"
              name="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="your.email@company.com"
              required
              className="bg-[#292929] border-white/20 text-white placeholder-gray-400"
            />
          </div>

          <Button 
            type="submit" 
            variant="hero" 
            className="w-full mt-6 bg-[#5f5f5f] hover:bg-[#6f6f6f] text-white border-none"
            disabled={isSubmitting}
          >
            {isSubmitting ? 'Submitting...' : 'Join Waitlist'}
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  );
};