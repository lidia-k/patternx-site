import Content from "@/components/layout/content";
import Link from "next/link";

export default function Consulting() {
  return (
    <Content showBanner={false}>
      <h1 className="text-2xl md:text-3xl font-bold mb-7">Privacy Policy</h1>
      <p className="mb-4">
        We at PatternX know you care about your data and we take privacy of
        your data seriously. Please read the following to learn more about our
        Privacy Policy. By using or accessing the{" "}
        <a href="/">PatternX</a> in any manner, you acknowledge
        that you accept the practices and policies outlined in this Privacy
        Policy, and you hereby consent that we will collect, use, and share your
        information in the following ways.
      </p>
      <p className="mb-4">
        Remember that your use of <a href="/">PatternX</a> is at
        all times subject to the Terms of Use, which incorporates this Privacy
        Policy. Any terms we use in this Policy without defining them have the
        definitions given to them in the Terms of Use.
      </p>
      <h3 className="text-lg md:text-xl font-bold mb-2">
        <a id="What_does_this_Privacy_Policy_cover_7"></a>What does this Privacy
        Policy cover?
      </h3>
      <p className="mb-4">
        This Privacy Policy covers our treatment of data that we gather when you
        are accessing or using our Website, but not to the practices of
        companies we don’t own or control, or people that we don’t manage. We
        gather various types of Personal Information from our users, as
        explained in more detail below, and we use this Personal Information
        internally in connection with our Website, including to contact you, to
        fulfill your requests for certain products and services, to provide and
        improve the Service, and to analyze how you use the Website. In certain
        cases, we may also share some Personal Information with third parties,
        but only as described below.
      </p>
      <p className="mb-4">
        As noted in the Terms of Use, we do not knowingly collect or solicit
        personal information from anyone under the age of 13. If you are under
        13, please do not attempt to send any personal information about
        yourself to us. If we learn that we have collected personal information
        from a child under age 13, we will delete that information as quickly as
        possible. If you believe that a child under 13 may have provided us
        personal information, please contact us at{" "}
        <a className="text-primary" href={"mailto:" + process.env.NEXT_PUBLIC_EMAIL}>{process.env.NEXT_PUBLIC_EMAIL}</a>.
      </p>
      <h3 className="text-lg md:text-xl font-bold mb-2">
        <a id="Will_PatternX_ever_change_this_Privacy_Policy_12"></a>Will
        PatternX ever change this Privacy Policy?
      </h3>
      <p className="mb-4">
        We’re constantly trying to improve our Website, so we may need to change
        this Privacy Policy from time to time as well, but we will alert you to
        changes by placing a notice on <a href="/">PatternX</a>,
        by sending you an email, and/or by some other means. Please note that if
        you’ve opted not to receive legal notice emails from us (or you haven’t
        provided us with your email address), those legal notices will still
        govern your use of the Website, and you are still responsible for
        reading and understanding them. If you use the Website after any changes
        to the Privacy Policy have been posted, that means you agree to all of
        the changes.
      </p>
      <h3 className="text-lg md:text-xl font-bold mb-2">
        <a id="Information_You_Provide_to_Us_15"></a>Information You Provide to
        Us
      </h3>
      <p className="mb-4">
        We receive and store any information you knowingly provide to us. This
        includes spreadsheets you upload or database tables you connect to for
        performing deduplication and record linkage.
      </p>
      <h3 className="text-lg md:text-xl font-bold mb-2">
        <a id="Information_Collected_Automatically_18"></a>Information Collected
        Automatically
      </h3>
      <p className="mb-4">
        Whenever you interact with our Website, we automatically receive and
        record information on our server logs from your browser or device, which
        may include your IP address, device identification, “cookie”
        information, the type of browser and/or device you’re using to access
        our Website, and the page or feature you requested. “Cookies” are
        identifiers we transfer to your browser or device that allow us to
        recognize your browser or device and tell us how and when pages and
        features in our Website are visited and by how many people. You may be
        able to change the preferences on your browser or device to prevent or
        limit your device’s acceptance of cookies, but this may prevent you from
        taking advantage of some of our features. If you click on a link to a
        third party website or service, such third party may also transmit
        cookies to you. Again, this Privacy Policy does not cover the use of
        cookies by any third parties, and we aren’t responsible for their
        privacy policies and practices.
      </p>
      <p className="mb-4">
        When we collect the usage information described above, we only use this
        data in aggregate form, and not in a manner that would identify you
        personally. For example, this aggregate data can tell us how often users
        use a particular feature of the Website, and we can use that knowledge
        to make the Website interesting to as many users as possible.
      </p>
      <h3 className="text-lg md:text-xl font-bold mb-2">
        <a id="Will_PatternX_Share_Any_of_the_data_it_Receives_23"></a>Will
        PatternX Share Any of the data it Receives?
      </h3>
      <p className="mb-4">
        We neither rent nor sell any of the data you provide to us to anyone. We
        will not allow third parties to access your data without your signed
        consent. PatternX will not access your data except for the purposes of
        debugging and improving the service. However, we may share your data
        with third parties as described in this section:
      </p>
      <p className="mb-4">
        Aggregated usage statistics. We may summarize, aggregate and share
        information about the your use of the service and how the data was
        processed by <a href="/">PatternX</a> to our partners to
        understand how often and in what ways people use our Website. This
        information will be anonymized so that neither you nor your data can be
        identified.
      </p>
      <p className="mb-4">
        Protection of PatternX and Others: We reserve the right to access,
        read, preserve, and disclose any information that we reasonably believe
        is necessary to comply with law or court order; enforce or apply our
        Terms of Use and other agreements; or protect the rights, property, or
        safety of PatternX, our employees, our users, or others.
      </p>
      <h3 className="text-lg md:text-xl font-bold mb-2">
        <a id="Compliance"></a>Compliance and security
      </h3>
      As of July 2019, PatternX has been certified compliant with the Family
      Educational Rights and Privacy Act (FERPA). Being FERPA compliant means
      that our data privacy systems are strong enough to handle sensitive
      student data, but more broadly, it also means that a third-party security
      team has audited our application architecture and verified that we take
      data privacy seriously.
      <h3 className="text-lg md:text-xl font-bold mb-2">
        <a id="What_if_I_have_questions_about_this_policy_30"></a>What if I have
        questions about this policy?
      </h3>
      <p className="mb-4">
        If you have any questions or concerns regarding our privacy policies,
        please send us a detailed message to{" "}
        <a className="text-primary" href={"mailto:" + process.env.NEXT_PUBLIC_EMAIL}>{process.env.NEXT_PUBLIC_EMAIL}</a>, and we will try
        to resolve your concerns.
      </p>
    </Content>
  );
}
