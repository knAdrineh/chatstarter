import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Label } from "@radix-ui/react-dropdown-menu";
import { Input } from "@/components/ui/input";
export function Addfriend() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button size="sm">Add Friend</Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Add Friend</DialogTitle>
          <DialogDescription>
            You can add a friend by their username
          </DialogDescription>
        </DialogHeader>
        <form className="contents">
          <div className="flex flex-col gap-1">
            <Label>Username</Label>
            <Input id="username" type="text" />
          </div>
          <DialogFooter>
            <Button>Send Friend Request</Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}
