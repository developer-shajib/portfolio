import { NextResponse } from 'next/server.js';
import nodemailer from 'nodemailer';

export async function POST(req) {
  try {
    const data = await req.json();

    // <!-- create transport -->
    const transporter = nodemailer.createTransport({
      host: 'smtp.gmail.com',
      port: 587,
      // secure: true,
      auth: {
        user: 'sunhailshajib2@gmail.com',
        pass: 'xnehbmrlwmbyfcqz'
      }
    });

    // <!-- send mail -->
    await transporter.sendMail({
      from: `"Portfolio Site Email" <sunhailshajib2@gmail.com>`,
      to: 'sunhailshajib1@gmail.com',
      subject: `${data?.name} sent a email from your portfolio site`,
      text: `${data.name} sent a email from you portfolio site. Here is the details:-

      Name : ${data?.name}
      Email : ${data?.email}
      Message : ${data?.message}
      `
    });

    return NextResponse.json({ message: `${data.name} Thanks for your email` }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ message: error.message }, { status: 400 });
  }
}
