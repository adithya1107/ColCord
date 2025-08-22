import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from '@/components/ui/dialog';
import { useToast } from '@/hooks/use-toast';
import { supabase } from '@/integrations/supabase/client';
import { Download, Eye } from 'lucide-react';
import * as XLSX from 'xlsx';

interface WaitlistData {
  id: string;
  name: string;
  organization: string;
  purpose: string;
  email: string;
  created_at: string;
}

interface AdminPanelProps {
  isOpen: boolean;
  onClose: () => void;
}

export const AdminPanel: React.FC<AdminPanelProps> = ({ isOpen, onClose }) => {
  const [password, setPassword] = useState('');
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [waitlistData, setWaitlistData] = useState<WaitlistData[]>([]);
  const { toast } = useToast();

  useEffect(() => {
    if (isAuthenticated) {
      loadWaitlistData();
    }
  }, [isAuthenticated]);

  const loadWaitlistData = async () => {
    try {
      const { data, error } = await supabase
        .from('waitlist')
        .select('*')
        .order('created_at', { ascending: false });

      if (error) {
        throw error;
      }

      setWaitlistData(data || []);
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to load waitlist data",
        variant: "destructive",
      });
    }
  };

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (password === '123456') {
      setIsAuthenticated(true);
      toast({
        title: "Access Granted",
        description: "Welcome to the admin panel",
      });
    } else {
      toast({
        title: "Access Denied",
        description: "Incorrect password",
        variant: "destructive",
      });
    }
  };

  const downloadExcel = () => {
    if (waitlistData.length === 0) {
      toast({
        title: "No Data",
        description: "No waitlist entries to download",
        variant: "destructive",
      });
      return;
    }

    // Format data for Excel
    const excelData = waitlistData.map((entry, index) => ({
      'S.No': index + 1,
      'Name': entry.name,
      'Organization': entry.organization,
      'Purpose': entry.purpose,
      'Email': entry.email,
      'Submitted At': new Date(entry.created_at).toLocaleString()
    }));

    // Create workbook and worksheet
    const wb = XLSX.utils.book_new();
    const ws = XLSX.utils.json_to_sheet(excelData);

    // Auto-size columns
    const colWidths = [
      { wch: 8 },  // S.No
      { wch: 20 }, // Name
      { wch: 25 }, // Organization
      { wch: 40 }, // Purpose
      { wch: 30 }, // Email
      { wch: 20 }  // Submitted At
    ];
    ws['!cols'] = colWidths;

    // Add worksheet to workbook
    XLSX.utils.book_append_sheet(wb, ws, 'Waitlist');

    // Download file
    const fileName = `waitlist-data-${new Date().toISOString().split('T')[0]}.xlsx`;
    XLSX.writeFile(wb, fileName);

    toast({
      title: "Download Complete",
      description: `Downloaded ${waitlistData.length} entries`,
    });
  };

  const handleClose = () => {
    setIsAuthenticated(false);
    setPassword('');
    onClose();
  };

  return (
    <Dialog open={isOpen} onOpenChange={(open) => { if (!open) handleClose(); }}>
      <DialogContent className="sm:max-w-2xl bg-black border-[#292929] [&>button]:text-white [&>button]:hover:text-gray-300">
        <DialogHeader>
          <DialogTitle className="text-xl font-semibold text-center text-white">
            {isAuthenticated ? 'Admin Panel' : 'Admin Access'}
          </DialogTitle>
          <DialogDescription className="text-gray-300">
            Enter the admin password.
          </DialogDescription>
        </DialogHeader>

        {!isAuthenticated ? (
          <form onSubmit={handleLogin} className="space-y-4 mt-4">
            <div className="space-y-2">
              <Input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter admin password"
                className="bg-[#292929] border-white/20 text-white placeholder-gray-400"
                autoFocus
              />
            </div>
            <Button type="submit" variant="hero" className="w-full bg-[#5f5f5f] hover:bg-[#6f6f6f] text-white border-none">
              Access Admin Panel
            </Button>
          </form>
        ) : (
          <div className="space-y-6 mt-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Eye className="h-5 w-5 text-primary" />
                <span className="text-lg font-medium text-white">
                  Waitlist Entries ({waitlistData.length})
                </span>
              </div>
              <Button onClick={downloadExcel} variant="hero" className="gap-2 bg-[#5f5f5f] hover:bg-[#6f6f6f] text-white border-none">
                <Download className="h-4 w-4" />
                Download Excel
              </Button>
            </div>

            {waitlistData.length === 0 ? (
              <div className="text-center py-8 text-gray-400">
                No waitlist entries yet
              </div>
            ) : (
              <div className="max-h-96 overflow-y-auto space-y-2">
                {waitlistData.map((entry, index) => (
                  <div
                    key={index}
                    className="p-4 bg-[#292929] rounded-lg "
                  >
                    <div className="grid grid-cols-2 gap-2 text-sm">
                      <div>
                        <span className="text-white font-medium text-primary">Name:</span> <span className="text-white">{entry.name}</span>
                      </div>
                      <div>
                        <span className="text-white font-medium text-primary">Email:</span> <span className="text-white">{entry.email}</span>
                      </div>
                      <div>
                        <span className="text-white font-medium text-primary">Organization:</span> <span className="text-white">{entry.organization}</span>
                      </div>
                      <div>
                        <span className="text-white font-medium text-primary">Date:</span>{' '}
                        <span className="text-white">{new Date(entry.created_at).toLocaleDateString()}</span>
                      </div>
                      <div className="col-span-2">
                        <span className="text-white font-medium text-primary">Purpose:</span> <span className="text-white">{entry.purpose}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        )}
      </DialogContent>
    </Dialog>
  );
};