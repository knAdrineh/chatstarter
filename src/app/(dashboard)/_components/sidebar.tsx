import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupAction,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import { SignOutButton } from "@clerk/nextjs";
import { useQuery } from "convex/react";
import { PlusIcon, User2Icon } from "lucide-react";
import Link from "next/link";
import { api } from "../../../../convex/_generated/api";

export function DashboardSideBar() {
  const user = useQuery(api.functions.user.get);
  
  if (!user) {
    return null;
  }
  
  return (
    <Sidebar className="h-screen">
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupContent>
            <SidebarMenu>
              <SidebarMenuItem>
                <SidebarMenuButton asChild>
                  <Link href="/friends" className="flex items-center gap-2">
                    <User2Icon className="h-4 w-4" />
                    <span>Friends</span>
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
        <SidebarGroup>
          <SidebarGroupLabel>Direct Messages</SidebarGroupLabel>
          <SidebarGroupAction>
            <button className="p-1 hover:bg-gray-100 rounded">
              <PlusIcon className="h-4 w-4" />
              <span className="sr-only">New Direct Message</span>
            </button>
          </SidebarGroupAction>
        </SidebarGroup>
      </SidebarContent>
      <SidebarFooter>
        <SidebarGroup>
          <SidebarGroupContent>
            <SidebarMenu>
              <DropdownMenu>
                <SidebarMenuItem>
                  <DropdownMenuTrigger asChild>
                    <SidebarMenuButton className="flex items-center gap-2 w-full">
                      <Avatar className="h-5 w-5">
                        <AvatarImage src={user.image} alt={user.username} />
                        <AvatarFallback>{user.username[0]}</AvatarFallback>
                      </Avatar>
                      <span className="font-medium">{user.username}</span>
                    </SidebarMenuButton>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent>
                    <DropdownMenuItem>
                      <SignOutButton>Sign out</SignOutButton>
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </SidebarMenuItem>
              </DropdownMenu>
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarFooter>
    </Sidebar>
  );
}