import { publicRoute } from "../middleware/authentication";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import axios from "axios";
import { CgSpinner } from "react-icons/cg";
import EmailSuccessModal from "../components/success/email";
import { earlyAccess } from "../server/api";
import Footer from "../components/footer";

export default function SolidTermsOfUsePage() {
    const [modalStatus, setModalStatus] = useState(false);

    const handleModalStatus = () => {
        setModalStatus(false);
      };
  return (
    <>
      <Head>
        <title>Oval: Solid website & dashboard terms of use</title>
      </Head>
      <nav className="flex justify-between items-center px-12 md:px-24 py-5 bg-white">
        <div className="flex space-x-2">
          {/*<Image src={oval} width={80} height={80} />*/}

          <h3 className={`text-grey-dark cursor-pointer`}>Oval</h3>
        </div>
        <div className="space-x-4 flex">
          <Link href="/">
            <button className="rounded-lg py-2 px-3 text-darkGray bg-blue-ocean border border-gray-100">
              Home
            </button>
          </Link>
        </div>
      </nav>

      <main className="pt-8 px-12 bg-white min-h-screen md:overflow-x-hidden">
        <div
          className="w-4/5 mx-auto my-0 max-w-[700px] min-w-[200px]"
          style={{}}
        >
          <h3 className="mb-4 text-center">TERMS OF USE</h3>

          <p className="mb-4">Last updated: 05/01/21</p>

          <p className="mb-4">
            These terms of use are entered into by and between You and Solid
            Financial Technologies, Inc. “Solid” ("Company," "we," or "us"). The
            following terms and conditions, together with any documents they
            expressly incorporate by reference (collectively, "Terms of Use"),
            govern your access to and use of solidfi.com or
            dashboard.solidfi.com including any content, functionality, and
            services offered on or through solidfi.com (the "Website") or
            dashboard.solidfi.com (the “Dashboard”), whether as a guest or a
            registered user.
          </p>

          <p className="mb-4">
            Please read the Terms of Use carefully before you start to use the
            Website.
            <strong>
              By using the Website or Dashboard, you accept and agree to be
              bound and abide by these Terms of Use and our Privacy Policy,
              found on the Website, incorporated herein by reference.
            </strong>{" "}
            If you do not want to agree to these Terms of Use or the Privacy
            Policy, you must not access or use the Website or Dashboard.
          </p>

          <p className="mb-4">
            This Website is offered and available to users who are 18 years of
            age or older and reside in the United States or any of its
            territories or possessions. By using this Website, you represent and
            warrant that you are of legal age to form a binding contract with
            the Company and meet all of the foregoing eligibility requirements.
            If you do not meet all of these requirements, you must not access or
            use the Website.
          </p>

          <div className="section mt-4">
            <h3 className="mb-4" id="changes-to-terms-of-use">
              Changes to the Terms of Use
            </h3>
            <p className="mb-4">
              We may revise and update these Terms of Use from time to time at
              our sole discretion. All changes are effective immediately when we
              post them and apply to all access to and use of the Website
              thereafter. However, any changes to the dispute resolution
              provisions set out in Governing Law and Jurisdiction will not
              apply to any disputes for which the parties have actual notice
              before the date the change is posted on the Website.
            </p>

            <p>
              Your continued use of the Website following the posting of revised
              Terms of Use means that you accept and agree to the changes. You
              are expected to check this page each time you access this Website
              so you are aware of any changes, as they are binding on you.
            </p>
          </div>

          <div className="section mt-4">
            <h3 className="mb-4" id="access-and-security">
              Accessing the Website and Account Security
            </h3>
            <p className="mb-4">
              We reserve the right to withdraw or amend this Website, and any
              service or material we provide on the Website, in our sole
              discretion without notice. We will not be liable if for any reason
              all or any part of the Website is unavailable at any time or for
              any period. From time to time, we may restrict access to some
              parts of the Website, or the entire Website, to users, including
              registered users.
            </p>

            <p className="mb-4">You are responsible for both: </p>

            <ul className="mb-4" role="list">
              <li>
                Making all arrangements necessary for you to have access to the
                Website.
              </li>
              <li>
                Ensuring that all persons who access the Website through your
                internet connection are aware of these Terms of Use and comply
                with them.
              </li>
            </ul>

            <p className="mb-4">
            To access the Website or some of the resources it offers, you may be asked to provide certain registration details or other information. It is a condition of your use of the Website that all the information you provide on the Website is correct, current, and complete. You agree that all information you provide to register with this Website or otherwise, including, but not limited to, through the use of any interactive features on the Website, is governed by our Privacy Policy, and you consent to all actions we take with respect to your information consistent with our Privacy Policy.
            </p>
            <p className="mb-4">
            If you choose or are provided with, a user name, password, or any other piece of information as part of our security procedures, you must treat such information as confidential, and you must not disclose it to any other person or entity. You also acknowledge that your account is personal to you and agree not to provide any other person with access to this Website or portions of it using your user name, password, or other security information. You agree to notify us immediately of any unauthorized access to or use of your user name or password or any other breach of security. You also agree to ensure that you exit from your account at the end of each session. You should use particular caution when accessing your account from a public or shared computer so that others are not able to view or record your password or other personal information.
            </p>

            <p>
            We have the right to disable any user name, password, or other identifiers, whether chosen by you or provided by us, at any time in our sole discretion for any or no reason, including if, in our opinion, you have violated any provision of these Terms of Use.
            </p>
          </div>

          <div className="section mt-4">
            <h3 className="mb-4" id="intellectual-property">Intellectual Property Rights</h3>
            <p className="mb-4">
            The Website and its entire contents, features, and functionality (including but not limited to all information, software, text, displays, images, video, and audio, and the design, selection, and arrangement thereof) are owned by the Company, its licensors, or other providers of such material and are protected by the United States and international copyright, trademark, patent, trade secret, and other intellectual property or proprietary rights laws.
            </p>

            <p className="mb-4">
            These Terms of Use permit you to use the Website for your personal, non-commercial use only. You must not reproduce, distribute, modify, create derivative works of, publicly display, publicly perform, republish, download, store, or transmit any of the material on our Website, except as follows:
            </p>

            <ul className="mb-4" role="list"><li>Your computer may temporarily store copies of such materials in RAM incidental to your accessing and viewing those materials.</li><li>You may store files that are automatically cached by your Web browser for display enhancement purposes.</li><li>You may print or download one copy of a reasonable number of pages of the Website for your own personal, non-commercial use and not for further reproduction, publication, or distribution.</li><li>If we provide desktop, mobile, or other applications for download, you may download a single copy to your computer or mobile device solely for your own personal, non-commercial use, provided you agree to be bound by our end user license agreement for such applications.</li><li>If we provide social media features with certain content, you may take such actions as are enabled by such features.</li></ul>
            <p className="mb-4">You must not:</p>

            <ul className="mb-4" role="list"><li>Modify copies of any materials from this site.</li><li>Use any illustrations, photographs, video or audio sequences, or any graphics separately from the accompanying text.</li><li>Delete or alter any copyright, trademark, or other proprietary rights notices from copies of materials from this site.</li></ul>
            <p className="mb-4">
            You must not access or use for any commercial purposes any part of the Website or any services or materials available through the Website. 
            </p>
            <p >If you print, copy, modify, download, or otherwise use or provide any other person with access to any part of the Website in breach of the Terms of Use, your right to use the Website will stop immediately and you must, at our option, return or destroy any copies of the materials you have made. No right, title, or interest in or to the Website or any content on the Website is transferred to you, and all rights not expressly granted are reserved by the Company. Any use of the Website not expressly permitted by these Terms of Use is a breach of these Terms of Use and may violate copyright, trademark, and other laws.</p>
          </div>

          <div className="section mt-4">
            <h3 className="mb-4" id="trademarks">Trademarks</h3>
            <p>The Company name, the Company logo, and all related names, logos, product and service names, designs, and slogans are trademarks of the Company or its affiliates or licensors. You must not use such marks without the prior written permission of the Company. All other names, logos, product and service names, designs, and slogans on this Website are the trademarks of their respective owners.</p>
          </div>

          <div className="section mt-4">
            <h3 className="mb-4" id="prohibited-uses">
                Prohibited Uses
            </h3>

            <p className="mb-4">You may use the Website only for lawful purposes and in accordance with these Terms of Use. You agree not to use the Website:</p>
            <ul className="mb-4" role="list"><li>In any way that violates any applicable federal, state, local, or international law or regulation (including, without limitation, any laws regarding the export of data or software to and from the US or other countries).&nbsp;</li><li>For the purpose of exploiting, harming, or attempting to exploit or harm minors in any way by exposing them to inappropriate content, asking for personally identifiable information, or otherwise.</li><li>To send, knowingly receive, upload, download, use, or re-use any material that does not comply with the Content Standards set out in these Terms of Use.</li><li>To transmit, or procure the sending of, any advertising or promotional material, including any "junk mail," "chain letter," "spam," or any other similar solicitation.</li><li>To impersonate or attempt to impersonate the Company, a Company employee, another user, or any other person or entity (including, without limitation, by using email addresses or screen names associated with any of the foregoing).</li><li>To engage in any other conduct that restricts or inhibits anyone's use or enjoyment of the Website, or which, as determined by us, may harm the Company or users of the Website, or expose them to liability.</li></ul>
            <p className="mb-4">Additionally, you agree not to:</p>
            <ul role="list"><li>Use the Website in any manner that could disable, overburden, damage, or impair the site or interfere with any other party's use of the Website, including their ability to engage in real-time activities through the Website.</li><li>Use any robot, spider, or other automatic devices, process, or means to access the Website for any purpose, including monitoring or copying any of the material on the Website.</li><li>Use any manual process to monitor or copy any of the material on the Website, or for any other purpose not expressly authorized in these Terms of Use, without our prior written consent.</li><li>Use any device, software, or routine that interferes with the proper working of the Website.</li><li>Introduce any viruses, Trojan horses, worms, logic bombs, or other material that is malicious or technologically harmful.</li><li>Attempt to gain unauthorized access to, interfere with, damage, or disrupt any parts of the Website, the server on which the Website is stored, or any server, computer, or database connected to the Website.&nbsp;</li><li>Attack the Website via a denial-of-service attack or a distributed denial-of-service attack.</li><li>Otherwise attempt to interfere with the proper working of the Website.</li></ul>

     
          </div>

          <div className="section mt-4">
                <h3 className="mb-4" id="user-contributions">User Contributions</h3>
                <p className="mb-4">The Website may contain message boards, chat rooms, personal web pages or profiles, forums, bulletin boards, and other interactive features (collectively, "<strong>Interactive Services</strong>") that allow users to post, submit, publish, display, or transmit to other users or other persons (hereinafter, "<strong>post</strong>") content or materials (collectively, "<strong>User Contributions</strong>") on or through the Website.</p>
                <p className="mb-4">
                Any User Contribution you post to the site will be considered non-confidential and non-proprietary. By providing any User Contribution on the Website, you grant us and our affiliates and service providers, and each of their and our respective licensees, successors, and assigns the right to use, reproduce, modify, perform, display, distribute, and otherwise disclose to third parties any such material for any purpose. 
                </p>
                <p className="mb-4">You represent and warrant that: </p>
                <ul className="mb-4" role="list"><li>You own or control all rights in and to the User Contributions and have the right to grant the license granted above to us and our affiliates and service providers, and each of their and our respective licensees, successors, and assigns.</li><li>All of your User Contributions do and will comply with these Terms of Use.&nbsp;</li></ul>
                <p className="mb-4">You understand and acknowledge that you are responsible for any User Contributions you submit or contribute, and you, not the Company, have full responsibility for such content, including its legality, reliability, accuracy, and appropriateness.</p>
                <p>We are not responsible or liable to any third party for the content or accuracy of any User Contributions posted by you or any other user of the Website. 
                </p>
            </div>

            <div className="section mt-4">
                <h3 className="mb-4" id="montioring-enforcement-and-termination">
                Monitoring and Enforcement; Termination
                </h3>
                <p className="mb-4">We have the right to:</p>
                <ul className="mb-4" role="list"><li>Remove or refuse to post any User Contributions for any or no reason in our sole discretion.</li><li>Take any action with respect to any User Contribution that we deem necessary or appropriate in our sole discretion, including if we believe that such User Contribution violates the Terms of Use, including the Content Standards, infringes any intellectual property right or other rights of any person or entity, threatens the personal safety of users of the Website or the public, or could create liability for the Company.</li><li>Disclose your identity or other information about you to any third party who claims that material posted by you violates their rights, including their intellectual property rights or their right to privacy.</li><li>Take appropriate legal action, including without limitation, referral to law enforcement, for any illegal or unauthorized use of the Website.&nbsp;</li><li>Terminate or suspend your access to all or part of the Website for any or no reason, including without limitation, any violation of these Terms of Use.</li></ul>
                <p className="mb-4">
                Without limiting the foregoing, we have the right to cooperate fully with any law enforcement authorities or court order requesting or directing us to disclose the identity or other information of anyone posting any materials on or through the Website. YOU WAIVE AND HOLD HARMLESS THE COMPANY AND ITS AFFILIATES, LICENSEES, AND SERVICE PROVIDERS FROM ANY CLAIMS RESULTING FROM ANY ACTION TAKEN BY ANY OF THE FOREGOING PARTIES DURING, OR TAKEN AS A CONSEQUENCE OF, INVESTIGATIONS BY EITHER SUCH PARTIES OR LAW ENFORCEMENT AUTHORITIES.
                </p>
                <p>
                However, we do not undertake to review material before it is posted on the Website, and cannot ensure prompt removal of objectionable material after it has been posted. Accordingly, we assume no liability for any action or inaction regarding transmissions, communications, or content provided by any user or third party. We have no liability or responsibility to anyone for the performance or nonperformance of the activities described in this section. 
                </p>
            </div>

            <div className="section mt-4">
                <h3 className="mb-4" id="content-standards">
                Content Standards
                </h3>
                <p className="mb-4">These content standards apply to any and all User Contributions and use of Interactive Services. User Contributions must in their entirety comply with all applicable federal, state, local, and international laws and regulations. Without limiting the foregoing, User Contributions must not:</p>

                <ul role="list"><li>Contain any material that is defamatory, obscene, indecent, abusive, offensive, harassing, violent, hateful, inflammatory, or otherwise objectionable.</li><li>Promote sexually explicit or pornographic material, violence, or discrimination based on race, sex, religion, nationality, disability, sexual orientation, or age.</li><li>Infringe any patent, trademark, trade secret, copyright, or other intellectual property or other rights of any other person.</li><li>Violate the legal rights (including the rights of publicity and privacy) of others or contain any material that could give rise to any civil or criminal liability under applicable laws or regulations or that otherwise may be in conflict with these Terms of Use and our Privacy Policy.</li><li>Be likely to deceive any person.</li><li>Promote any illegal activity, or advocate, promote, or assist any unlawful act.</li><li>Cause annoyance, inconvenience, or needless anxiety or be likely to upset, embarrass, alarm, or annoy any other person.</li><li>Impersonate any person, or misrepresent your identity or affiliation with any person or organization.&nbsp;</li><li>Involve commercial activities or sales, such as contests, sweepstakes, and other sales promotions, barter, or advertising.</li><li>Give the impression that they emanate from or are endorsed by us or any other person or entity, if this is not the case.</li></ul>
            </div>

            <div className="section mt-4">
                <h3 className="mb-4" id="reliance-on-information-posted">Reliance on Information Posted</h3>
                <p className="mb-4">The information presented on or through the Website is made available solely for general information purposes. We do not warrant the accuracy, completeness, or usefulness of this information. Any reliance you place on such information is strictly at your own risk. We disclaim all liability and responsibility arising from any reliance placed on such materials by you or any other visitor to the Website, or by anyone who may be informed of any of its contents.
                </p>
                <p>
                This Website may include content provided by third parties, including materials provided by other users, bloggers, and third-party licensors, syndicators, aggregators, and/or reporting services. All statements and/or opinions expressed in these materials, and all articles and responses to questions and other content, other than the content provided by the Company, are solely the opinions and the responsibility of the person or entity providing those materials. These materials do not necessarily reflect the opinion of the Company. We are not responsible, or liable to you or any third party, for the content or accuracy of any materials provided by any third parties.
                </p>
            </div>

            <div className="section mt-4">
                <h3 className="mb-4" id="changes-to-this-website">
                Changes to the Website
                </h3>
                <p>We may update the content on this Website from time to time, but its content is not necessarily complete or up-to-date. Any of the material on the Website may be out of date at any given time, and we are under no obligation to update such material.</p>
            </div>

            <div className="section mt-4">
                <h3 className="mb-4" id="info-about-you">Information About You and Your Visits to the Website</h3>
                <p>
                All information we collect on this Website is subject to our Privacy Policy. By using the Website, you consent to all actions taken by us with respect to your information in compliance with the Privacy Policy. 
                </p>
            </div>

            <div className="section mt-4">
                <h3 className="mb-4" id="linking-to-website">Linking to the Website and Social Media Features</h3>
                <p className="mb-4">You may link to our homepage, provided you do so in a way that is fair and legal and does not damage our reputation or take advantage of it, but you must not establish a link in such a way as to suggest any form of association, approval, or endorsement on our part without our express written consent. 
                </p>
                <p className="mb-4">This Website may provide certain social media features that enable you to:</p>
                <ul className="mb-4" role="list"><li>Link from your own or certain third-party websites to certain content on this Website.</li><li>Send emails or other communications with certain content, or links to certain content, on this Website.</li><li>Cause limited portions of content on this Website to be displayed or appear to be displayed on your own or certain third-party websites.</li></ul>
                <p className="mb-4">You may use these features solely as they are provided by us, and solely with respect to the content, they are displayed with, and otherwise in accordance with any additional terms and conditions we provide with respect to such features. Subject to the foregoing, you must not:
                </p>
                <ul className="mb-4" role="list"><li>Establish a link from any website that is not owned by you.</li><li>Cause the Website or portions of it to be displayed on, or appear to be displayed by, any other site, for example, framing, deep linking, or in-line linking.</li><li>Link to any part of the Website other than the homepage.</li><li>Otherwise, take any action with respect to the materials on this Website that is inconsistent with any other provision of these Terms of Use.</li></ul>
                <p className="mb-4">The website from which you are linking, or on which you make certain content accessible, must comply in all respects with the Content Standards set out in these Terms of Use.</p>
                <p className="mb-4">You agree to cooperate with us in causing any unauthorized framing or linking immediately to stop. We reserve the right to withdraw linking permission without notice.
                </p>
                <p>
                We may disable all or any social media features and any links at any time without notice in our discretion. 
                </p>
            </div>

            <div className="section mt-4">
                <h3 className="mb-4" id="links-from-website">
                    Links from the Website
                </h3>

                <p>
                If the Website contains links to other sites and resources provided by third parties, these links are provided for your convenience only. This includes links contained in advertisements, including banner advertisements and sponsored links. We have no control over the contents of those sites or resources, and accept no responsibility for them or for any loss or damage that may arise from your use of them. If you decide to access any of the third-party websites linked to this Website, you do so entirely at your own risk and subject to the terms and conditions of use for such websites.
                </p>
            </div>

            <div className="section mt-4">
                <h3 className="mb-4" id="geographic-restrictions">Geographic Restrictions</h3>
                <p>The owner of the Website is based in the State of California in the United States. We provide this Website for use only by persons located in the United States. We make no claims that the Website or any of its content is accessible or appropriate outside of the United States. Access to the Website may not be legal by certain persons or in certain countries. If you access the Website from outside the United States, you do so on your own initiative and are responsible for compliance with local laws.</p>
            </div>

            <div className="section mt-4">
                <h3 className="mb-4" id="disclaimer-of-warranties">Disclaimer of Warranties</h3>
                <p className="mb-4">You understand that we cannot and do not guarantee or warrant that files available for downloading from the internet or the Website will be free of viruses or other destructive code. You are responsible for implementing sufficient procedures and checkpoints to satisfy your particular requirements for anti-virus protection and accuracy of data input and output, and for maintaining a means external to our site for any reconstruction of any lost data. TO THE FULLEST EXTENT PROVIDED BY LAW, WE WILL NOT BE LIABLE FOR ANY LOSS OR DAMAGE CAUSED BY A DISTRIBUTED DENIAL-OF-SERVICE ATTACK, VIRUSES, OR OTHER TECHNOLOGICALLY HARMFUL MATERIAL THAT MAY INFECT YOUR COMPUTER EQUIPMENT, COMPUTER PROGRAMS, DATA, OR OTHER PROPRIETARY MATERIAL DUE TO YOUR USE OF THE WEBSITE OR ANY SERVICES OR ITEMS OBTAINED THROUGH THE WEBSITE OR TO YOUR DOWNLOADING OF ANY MATERIAL POSTED ON IT, OR ON ANY WEBSITE LINKED TO IT.</p>
                <p className="mb-4">
                YOUR USE OF THE WEBSITE, ITS CONTENT, AND ANY SERVICES OR ITEMS OBTAINED THROUGH THE WEBSITE IS AT YOUR OWN RISK. THE WEBSITE, ITS CONTENT, AND ANY SERVICES OR ITEMS OBTAINED THROUGH THE WEBSITE ARE PROVIDED ON AN "AS IS" AND "AS AVAILABLE" BASIS, WITHOUT ANY WARRANTIES OF ANY KIND, EITHER EXPRESS OR IMPLIED. NEITHER THE COMPANY NOR ANY PERSON ASSOCIATED WITH THE COMPANY MAKES ANY WARRANTY OR REPRESENTATION WITH RESPECT TO THE COMPLETENESS, SECURITY, RELIABILITY, QUALITY, ACCURACY, OR AVAILABILITY OF THE WEBSITE. WITHOUT LIMITING THE FOREGOING, NEITHER THE COMPANY NOR ANYONE ASSOCIATED WITH THE COMPANY REPRESENTS OR WARRANTS THAT THE WEBSITE, ITS CONTENT, OR ANY SERVICES OR ITEMS OBTAINED THROUGH THE WEBSITE WILL BE ACCURATE, RELIABLE, ERROR-FREE, OR UNINTERRUPTED, THAT DEFECTS WILL BE CORRECTED, THAT OUR SITE OR THE SERVER THAT MAKES IT AVAILABLE ARE FREE OF VIRUSES OR OTHER HARMFUL COMPONENTS, OR THAT THE WEBSITE OR ANY SERVICES OR ITEMS OBTAINED THROUGH THE WEBSITE WILL OTHERWISE MEET YOUR NEEDS OR EXPECTATIONS. 
                </p>

                <p className="mb-4">
                TO THE FULLEST EXTENT PROVIDED BY LAW, THE COMPANY HEREBY DISCLAIMS ALL WARRANTIES OF ANY KIND, WHETHER EXPRESS OR IMPLIED, STATUTORY, OR OTHERWISE, INCLUDING BUT NOT LIMITED TO ANY WARRANTIES OF MERCHANTABILITY, NON-INFRINGEMENT, AND FITNESS FOR PARTICULAR PURPOSE.
                </p>

                <p>
                THE FOREGOING DOES NOT AFFECT ANY WARRANTIES THAT CANNOT BE EXCLUDED OR LIMITED UNDER APPLICABLE LAW.
                </p>
                
            </div>

            <div className="section mt-4">
                <h3 className="mb-4" id="limitation-on-liability">
                Limitation on Liability
                </h3>
                <p className="mb-4">
                TO THE FULLEST EXTENT PROVIDED BY LAW, IN NO EVENT WILL THE COMPANY, ITS AFFILIATES, OR THEIR LICENSORS, SERVICE PROVIDERS, EMPLOYEES, AGENTS, OFFICERS, OR DIRECTORS BE LIABLE FOR DAMAGES OF ANY KIND, UNDER ANY LEGAL THEORY, ARISING OUT OF OR IN CONNECTION WITH YOUR USE, OR INABILITY TO USE, THE WEBSITE, ANY WEBSITES LINKED TO IT, ANY CONTENT ON THE WEBSITE OR SUCH OTHER WEBSITES, INCLUDING ANY DIRECT, INDIRECT, SPECIAL, INCIDENTAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES, INCLUDING BUT NOT LIMITED TO, PERSONAL INJURY, PAIN AND SUFFERING, EMOTIONAL DISTRESS, LOSS OF REVENUE, LOSS OF PROFITS, LOSS OF BUSINESS OR ANTICIPATED SAVINGS, LOSS OF USE, LOSS OF GOODWILL, LOSS OF DATA, AND WHETHER CAUSED BY TORT (INCLUDING NEGLIGENCE), BREACH OF CONTRACT, OR OTHERWISE, EVEN IF FORESEEABLE. 
                </p>
<p className="mb-4">The limitation of liability set out above does not apply to liability resulting from our gross negligence or willful misconduct.

</p>
                <p>
THE FOREGOING DOES NOT AFFECT ANY LIABILITY THAT CANNOT BE EXCLUDED OR LIMITED UNDER APPLICABLE LAW.
                </p>
            </div>

            <div className="section mt-4">
            <h3 className="mb-4" id="indemnification">Indemnification</h3>
            <p>You agree to defend, indemnify, and hold harmless the Company, its affiliates, licensors, and service providers, and its and their respective officers, directors, employees, contractors, agents, licensors, suppliers, successors, and assigns from and against any claims, liabilities, damages, judgments, awards, losses, costs, expenses, or fees (including reasonable attorneys' fees) arising out of or relating to your violation of these Terms of Use or your use of the Website, including, but not limited to, your User Contributions, any use of the Website's content, services, and products other than as expressly authorized in these Terms of Use, or your use of any information obtained from the Website.

            </p>
            </div>

            <div className="section mt-4">
                <h3 className="mb-4" id="arbitration">
                Arbitration
                </h3>
                <p className="mb-4">
                Any controversy or claim arising out of or relating to this Agreement, or the breach thereof, shall be determined by final and binding arbitration administered by the American Arbitration Association (”AAA”) under its Commercial Arbitration Rules and Mediation Procedures (”Commercial Rules”) including, if appropriate, the Procedures for Large, Complex Commercial Disputes. Authority of tribunal, judicial review.
                </p>
                <p className="mb-4">
                The award rendered by the arbitrators shall be final, non-reviewable, non-appealable and binding on the parties and may be entered and enforced in any court having jurisdiction. There shall be three arbitrators agreed to by the parties within thirty (30) days of receipt by respondents of the request for arbitration or, in default of such agreement, by the AAA. The seat or place of arbitration shall be San Mateo, California. The arbitration shall be conducted and the award shall be rendered in the english language.
                </p>
                <p>
                Except as may be required by law, neither a party nor the arbitrators may disclose the existence, content or results of any arbitration without the prior written consent of both parties, unless to protect or pursue a legal right. The arbitrators will have no authority to award punitive damages, consequential damages, or liquidated damages.
                </p>
            </div>

            <div className="section mt-4">
                <h3 className="mb-4" id="class-and-collective-actions">
                Class Actions and Collective Actions
                </h3>
                <p className="mb-4">The parties expressly agree and intend that:</p>
                <ul className="mb-4" role="list"><li>class action and collective action procedures shall not be asserted, and will not apply, in any arbitration under this Agreement;</li><li>each will not assert class or collective action claims against the other in arbitration, court, or any other forum;</li><li>each shall only submit their own individual claims in arbitration and shall not bring claims against the other in any representative capacity on behalf of any other individual; and</li><li>any claims by a party will not be joined, consolidated, or heard together with claims of any other party.</li></ul>
                <p>
                Notwithstanding anything to the contrary in the AAA Arbitration Rules, and the general grant of authority to the arbitrators by this agreement of the power to determine issues of arbitrability, the arbitrators shall have no jurisdiction or authority to compel any class or collective claim, to consolidate different arbitration proceedings, or to join any other party to an arbitration between the parties. The arbitrators shall have the authority to determine the enforceability of this class and collective action and arbitration waiver. 
                </p>
            </div>

            <div className="section mt-4">
                <h3 className="mb-4" id="governing-law-and-jurisdiction">
                Governing Law and Jurisdiction
                </h3>
                <p className="mb-4">
                Subject to the arbitration provisions of these Terms of Use, all matters relating to the Website and these Terms of Use, and any dispute or claim arising therefrom or related thereto (in each case, including non-contractual disputes or claims), shall be governed by and construed in accordance with the internal laws of the State of Delaware without giving effect to any choice or conflict of law provision or rule (whether of the State of Delaware or any other jurisdiction).
                </p>
                <p>
                Subject to the arbitration provisions of these Terms of Use, any legal suit, action, or proceeding arising out of, or related to, these Terms of Use or the Website shall be instituted exclusively in the federal courts of the United States or the courts of the State of California, in each case located in, or nearest to, the City of San Mateo and County of San Mateo. You waive any and all objections to the exercise of jurisdiction over you by such courts and to venue in such courts.
                </p>
            </div>

            <div className="section mt-4">
                <h3 className="mb-4" id="limitation-on-time-to-file-claims">Limitation on Time to File Claims
                </h3>
                <p>
                ANY CAUSE OF ACTION OR CLAIM YOU MAY HAVE ARISING OUT OF OR RELATING TO THESE TERMS OF USE OR THE WEBSITE MUST BE COMMENCED WITHIN ONE (1) YEAR AFTER THE CAUSE OF ACTION ACCRUES; OTHERWISE, SUCH CAUSE OF ACTION OR CLAIM IS PERMANENTLY BARRED.
                </p>
            </div>

            <div className="section mt-4">
                <h3 className="mb-4" id="waiver-and-severability">Waiver and Severability
                </h3>
                <p className="mb-4">No waiver by the Company of any term or condition set out in these Terms of Use shall be deemed a further or continuing waiver of such term or condition or a waiver of any other term or condition, and any failure of the Company to assert a right or provision under these Terms of Use shall not constitute a waiver of such right or provision.</p>
                <p>
                If any provision of these Terms of Use is held by a court or other tribunal of competent jurisdiction to be invalid, illegal, or unenforceable for any reason, such provision shall be eliminated or limited to the minimum extent such that the remaining provisions of the Terms of Use will continue in full force and effect. 
                </p>
            </div>

            <div className="section mt-4">
                <h3 className="mb-4" id="entire-agreement">
                Entire Agreement
                </h3>
                <p>
                The Terms of Use and our Privacy Policy constitute the sole and entire agreement between you and Solid regarding the Website and supersede all prior and contemporaneous understandings, agreements, representations, and warranties, both written and oral, regarding the Website. 
                </p>
            </div>

            <div className="section mt-4">
                <h3 className="mb-4" id="comments-and-concerns">
                Your Comments and Concerns
                </h3>

                <p className="mb-4">This website is operated by Solid Financial Technologies, Inc., 2955 Campus Dr, #110, San Mateo California 94403.</p>
                <p>All other feedback, comments, requests for technical support, and other communications relating to the Website should be directed to: legal@solidfi.com</p>
            </div>

   
        </div>
      </main>
      <Footer />

      <EmailSuccessModal status={modalStatus} closeModal={handleModalStatus} />
    </>
  );
}
