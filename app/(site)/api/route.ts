import sendgrid from "@sendgrid/mail";

console.log(sendgrid.setApiKey(process.env.SENDGRID_API_KEY));

export async function POST(req: any) {
  const res = await req.json();
  const { name, email, message } = res;

  console.log(name);

  //@ts-ignore
  sendgrid
    .send({
      to: "asads@hey.com",
      from: `${email}`,
      subject: `From ${name}; ${message}`,
      text: "hellooooo",
    })
    .then(() => {
      console.log("email sent");
      //   res.json({ message: "it worked!" });
    })
    .catch((err) => {
      console.error("ERROR: ", err);
      //   res.json({ message: "it DID NOT worked!" });
    });

  //   console.log(emailsent);

  return Response.json({ message: "it passed!" });
}
