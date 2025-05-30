import { CheckCircle2 } from "lucide-react";
import codeImg from "../assets/code.jpg";
import codeImg2 from "../assets/code2.png"
import { checklistItems } from "../constants";

const Workflow = () => {
  return (
    <div className="mt-20 Workflow">
      <h2 className="text-3xl sm:text-5xl lg:text-6xl text-center mt-6 tracking-wide">
        Who {" "}
        <span className="bg-gradient-to-r from-orange-500 to-orange-800 text-transparent bg-clip-text">
          We Are
        </span>
      </h2>
      <div className="flex flex-wrap justify-center">
        <div className="p-2 w-full lg:w-1/2">
          <img src={codeImg2} alt="Coding" />
        </div>
        <div className="pt-12 w-full lg:w-1/2">
          <p className="m-6 text-gray-500">At River Marketing Media, we’re passionate about helping businesses thrive in the digital age.
            With a team of experts in website development, brand design, and strategic ad management, we provide innovative solutions that deliver measurable results. Our mission is to empower brands to stand out, connect with their audience, and grow exponentially.

            We believe that every brand has a story waiting to be told. That’s why we specialize in ad production and storytelling that captivates audiences and drives engagement. From the initial concept to the final cut, our creative team works tirelessly to craft ads that are not only visually stunning but also emotionally impactful.

            Our ad-making process begins with understanding your vision and audience, ensuring every detail aligns with your brand’s identity.</p>
          {checklistItems.map((item, index) => (
            <div key={index} className="flex mb-2">
              <div className="text-orange-400 mx-6 bg-neutral-900 h-10 w-10 p-2 justify-center items-center rounded-full">
                <CheckCircle2 />
              </div>
              <div>
                <h5 className="mt-1 mb-2 text-xl">{item.title}</h5>
                <p className="text-md text-neutral-500">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Workflow;
