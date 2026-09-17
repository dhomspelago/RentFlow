import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import { Button } from "@/components/ui/button";

type User = {
  name: string;
  email: string;
  avatar?: string;
};

type NavbarProps = {
  user?: User | null;
  onLogout?: () => void;
};

export default function Navbar({ user, onLogout }: NavbarProps) {
  return (
    <nav className="border-b bg-background">
      <div className="mx-auto flex h-16 max-w-7xl items-center px-6">
        {/* Logo */}
        <div className="flex items-center">
          <a href="/" className="text-xl font-bold">
            RentFlow
          </a>
        </div>

        {/* Navigation */}
        <div className="mx-auto flex items-center gap-6">
          <a
            href="/dashboard"
            className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
          >
            Dashboard
          </a>

          <a
            href="/properties"
            className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
          >
            Properties
          </a>

          <a
            href="/tenants"
            className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
          >
            Tenants
          </a>

          <a
            href="/payments"
            className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
          >
            Payments
          </a>
        </div>

        {/* User */}
        <div className="flex items-center">
          {user && (
            <DropdownMenu>
              <DropdownMenuTrigger >
                <Button
                  variant="ghost"
                  className="flex items-center gap-2 px-2"
                >
                  <Avatar className="h-8 w-8">
                    <AvatarImage src={user.avatar} alt={user.name} />
                    <AvatarFallback>
                      {user.name.charAt(0).toUpperCase()}
                    </AvatarFallback>
                  </Avatar>

                  <span className="hidden text-sm font-medium sm:block">
                    {user.name}
                  </span>
                </Button>
              </DropdownMenuTrigger>

              <DropdownMenuContent align="end" className="w-56">
                <DropdownMenuLabel>
                  <div className="flex flex-col">
                    <span>{user.name}</span>
                    <span className="text-xs font-normal text-muted-foreground">
                      {user.email}
                    </span>
                  </div>
                </DropdownMenuLabel>

                <DropdownMenuSeparator />

                <DropdownMenuItem>Profile</DropdownMenuItem>

                <DropdownMenuItem>Settings</DropdownMenuItem>

                <DropdownMenuSeparator />

                <DropdownMenuItem
                  onClick={onLogout}
                  className="text-destructive focus:text-destructive"
                >
                  Logout
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          )}
        </div>
      </div>
    </nav>
  );
}
