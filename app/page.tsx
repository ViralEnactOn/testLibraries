import { AlertDialogDemo } from "@/components/app/AlertDialogDemo";
import { CalendarForm } from "@/components/app/CalendarForm";
import { CardWithForm } from "@/components/app/CardWithForm";
import AreaChartComponent from "@/components/app/Chart/AreaChartComponent";
import { DataTableDemo } from "@/components/app/DataTableDemo";
import { NavigationMenuDemo } from "@/components/app/NavigationMenuDemo";
import { SendMail } from "@/components/app/SendMail";
import { SheetDemo } from "@/components/app/SheetDemo";
import { TextareaForm } from "@/components/app/TextareaForm";
import { Button } from "@/components/ui/button";
import NotionMagicLinkEmail from "@/react-email-starter/emails/notion-magic-link";
import PlaidVerifyIdentityEmail from "@/react-email-starter/emails/plaid-verify-identity";
import StripeWelcomeEmail from "@/react-email-starter/emails/stripe-welcome";
import VercelInviteUserEmail from "@/react-email-starter/emails/vercel-invite-user";
import Image from "next/image";
export default function Home() {
  return (
    <main className="p-24">
      {/* Shadcn */}
      {/* Button */}
      {/* <div>
        <Button size="lg">Button Demo</Button>
      </div> */}

      {/* Alert Dialog */}
      {/* <div>
        <AlertDialogDemo />
      </div> */}

      {/* Calender Form */}
      {/* <div>
        <CalendarForm />
      </div> */}

      {/* Card Form */}
      {/* <div className="flex justify-center">
        <CardWithForm />
      </div> */}

      {/* Sheet Demo */}
      {/* <div>
        <SheetDemo />
      </div> */}

      {/* Nav Bar */}
      {/* <div className="flex justify-center">
        <NavigationMenuDemo />
      </div> */}

      {/* Data Table */}
      {/* <div>
        <DataTableDemo />
      </div> */}

      {/* Text Area Form */}
      {/* <div>
        <PlaidVerifyIdentityEmail />{" "}
      </div> */}

      {/* Nodemailer */}
      {/* <div>
        <SendMail />
      </div> */}
    </main>
  );
}
