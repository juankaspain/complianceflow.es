'use client';

import Link from 'next/link';
import { Dialog, DialogContent } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import { X } from 'lucide-react';

interface MobileMenuProps {
  open: boolean;
  onClose: () => void;
  navigation: Array<{ name: string; href: string }>;
}

export function MobileMenu({ open, onClose, navigation }: MobileMenuProps) {
  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-md">
        <div className="flex items-center justify-between">
          <h2 className="text-lg font-semibold">Menú</h2>
          <Button variant="ghost" size="icon" onClick={onClose} aria-label="Cerrar menú">
            <X className="h-5 w-5" />
          </Button>
        </div>

        <Separator className="my-4" />

        <nav className="flex flex-col space-y-2" aria-label="Navegación móvil">
          {navigation.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              onClick={onClose}
              className="px-4 py-3 text-sm font-medium rounded-lg hover:bg-accent transition-colors"
            >
              {item.name}
            </Link>
          ))}
        </nav>

        <Separator className="my-4" />

        <div className="flex flex-col space-y-2">
          <Button variant="outline" asChild className="w-full">
            <Link href="/documentacion" onClick={onClose}>
              Docs API
            </Link>
          </Button>
          <Button asChild className="w-full">
            <Link href="/#demo" onClick={onClose}>
              Probar gratis
            </Link>
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
}
