import { useQuery } from "convex/react";
import { api } from "../../../../convex/_generated/api";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { CheckIcon, MessageCircleIcon, XIcon } from "lucide-react";
import { Tooltip, TooltipContent } from "@radix-ui/react-tooltip";
import { TooltipTrigger } from "@/components/ui/tooltip";
import React from "react";
import { cn } from "@/lib/utils";

const useTestUsers = () => {
  const user = useQuery(api.functions.user.get);
  if (!user) {
    return [];
  }
  return [user, user, user, user, user];
};
function FriendsListEmpty({ children }: { children: React.ReactNode }) {
  return (
    <div className="p-4 bg-muted/50 text-center text-sm text-muted-foreground">
      {children}
    </div>
  );
}
export function PendingFriendsList() {
  const users = useTestUsers();
  return (
    <div className="space-y-4">
      <h2 className="text-sm text-muted-foreground p-2.5">Pending Friends</h2>
      <div className="flex flex-col divide-y">
        {users.length === 0 && (
          <FriendsListEmpty>
            You dont have any pending Friends requests.
          </FriendsListEmpty>
        )}
        {users.map((user, index) => (
          <FriendItem key={index} username={user.username} image={user.image}>
            <IconButton
              title="Accept"
              icon={<CheckIcon />}
              className="bg-green-100"
            ></IconButton>
            <IconButton
              title="Reject"
              icon={<XIcon />}
              className="bg-red-100"
            ></IconButton>
          </FriendItem>
        ))}
      </div>
    </div>
  );
}
export function AcceptedFriendsList() {
  const users = useTestUsers();
  return (
    <div className="space-y-4">
      <h2 className="text-sm text-muted-foreground p-2.5">Pending Friends</h2>
      <div className="flex flex-col divide-y">
        {users.length === 0 && (
          <FriendsListEmpty>You dont have any friends yet.</FriendsListEmpty>
        )}
        {users.map((user, index) => (
          <FriendItem key={index} username={user.username} image={user.image}>
            <IconButton
              title="Start DM"
              icon={<MessageCircleIcon />}
            ></IconButton>
            <IconButton
              title="Remove Friend"
              icon={<XIcon />}
              className="bg-red-100"
            ></IconButton>
          </FriendItem>
        ))}
      </div>
    </div>
  );
}

function FriendItem({
  username,
  image,
  children,
}: {
  username: string;
  image: string;
  children?: React.ReactNode;
}) {
  return (
    <div className="flex items-center gap-3 py-3 p-2.5 gap-2.5 justify-between">
      <div className="flex items-center gap-2.5 ">
        <Avatar className="h-6 w-6 size-9 border">
          <AvatarImage src={image} alt={username} />
          <AvatarFallback>{username[0]}</AvatarFallback>
        </Avatar>
        <p className="text-sm font-medium">{username}</p>
      </div>
      <div className="flex items-center gap-1">{children}</div>
    </div>
  );
}

function IconButton({
  title,
  className,
  icon,
}: {
  title: string;
  className?: string;
  icon: React.ReactNode;
}) {
  return (
    <Tooltip>
      <TooltipTrigger asChild>
        <Button
          className={cn(className, "rounded-full")}
          variant="outline"
          size="icon"
        >
          {icon}
          <span className="sr-only">{title}</span>
        </Button>
      </TooltipTrigger>
      <TooltipContent>{title}</TooltipContent>
    </Tooltip>
  );
}
