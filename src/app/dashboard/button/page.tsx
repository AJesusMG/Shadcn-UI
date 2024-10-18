'use client'

import { Button } from "@/components/ui/button";
import { EnvelopeOpenIcon } from "@radix-ui/react-icons"
import { ReloadIcon } from "@radix-ui/react-icons"

export default function Page() {
  return (
    <div className="grid grid-cols-5 gap-2">
      <Button>default</Button>
      <Button variant="destructive">destructive</Button>
      <Button variant="ghost">ghost</Button>
      <Button variant="link">link</Button>
      <Button variant="outline">outline</Button>
      <Button variant="secondary">secondary</Button>
      <Button disabled>disabled</Button>
      <Button onClick={() => console.log("Hola Mundo")}>Click Me</Button>
      <Button variant="success">success</Button>
      <Button capitalize={false}>capitalize false</Button>
      <Button size="icon">$</Button>
      <Button><EnvelopeOpenIcon/> Login with Email</Button>
      <Button><ReloadIcon className="animate-spin"/> Wait ...</Button>
    </div>
  );
}
