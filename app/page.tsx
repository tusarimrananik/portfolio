import { Button } from "@/components/Button";

export default function Page() {
  return (
    <div className="flex flex-col gap-4 p-6 w-100">
      <Button>Primary</Button>
      <Button variant="secondary" size="lg" shadow="lg">
        Secondary Large
      </Button>
      <Button variant="accent" size="sm" shadow="none">
        Accent Small
      </Button>
      <Button variant="ghost">Ghost</Button>
    </div>
  );
}
