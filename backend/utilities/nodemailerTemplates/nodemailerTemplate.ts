import nodemailer from "nodemailer";
import fs from "fs";
import ejs from "ejs";
import { htmlToText } from "html-to-text";
import juice from "juice";
// import settings from "../settings";

const smtp = nodemailer.createTransport({
    service: process.env.SERVICE,
    auth: {
        user: process.env.USER,
        pass: process.env.PASS,
    },
});

interface templateProps {
    template: string
    templateVars: {
        emailAddress: string,
        resetLink: string,
    },
}
// .... not yet working 
const sendTemplate: templateProps = ({ template: templateName, templateVars, ...restOfOptions }) => {
    // export default ({ template: templateName, templateVars, ...restOfOptions }) => {
    const templatePath = `../templates/${templateName}.html`;
    const options = {
        ...restOfOptions,
    };

    if (templateName && fs.existsSync(templatePath)) {
        const template = fs.readFileSync(templatePath, "utf-8");
        const html = ejs.render(template, templateVars);
        const text = htmlToText(html);
        const htmlWithStylesInlined = juice(html);

        options.html = htmlWithStylesInlined;
        options.text = text;
    }

    return smtp.sendMail(options);
};

export default sendTemplate
// to use the sendMail
// await sendEmail({
//     to: args.emailAddress,
//     from: settings?.support?.email,
//     subject: "Reset Your Password",
//     template: "reset-password",
//     templateVars: {
//       emailAddress: args.emailAddress,
//       resetLink,
//     },
//   });