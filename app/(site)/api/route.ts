import sendgrid from "@sendgrid/mail";

const API_KEY: string = process.env.SENDGRID_API_KEY || "";

sendgrid.setApiKey(API_KEY);

export async function POST(req: any) {
  const req_info = await req.json();
  const { name, email, message } = req_info;

  //  user data validation
  //   if (name! || name.length < 4) {
  //     return Response.error();
  //   }

  // send data to sendGrid for email
  //@ts-ignore
  const sendEmail = await sendgrid.send({
    to: "asads@hey.com",
    from: `${email}`,
    subject: `From ${name}; ${message}`,
    text: "hellooooo",
  });

  //   const response = sendEmail;

  return Response.json({ message: "it passed!" });
}
