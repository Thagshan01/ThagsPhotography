import React from "react";
import Title from "../components/Title";
import Divider from "../components/Divider";
import SocialIcons from "../components/SocialIcons";    
import Image from "next/image";

const AboutSec = () => {
    return (
        <section>
           <div className="container">
            {/*Title */}
            <Title subtitle="About" title="I am Thagshan" 
            link="Know More" />
            {/*Divider */}
            <Divider />
            {/*wrapper */}
            <div className="">
                {/*banner */}
                <figure>
                    <Image 
                        src="/images/about-section-b.jpg" 
                        alt="" 
                        width={1798} 
                        height={2133} 
                    />
                </figure>
                {/*content */}
                <div className="">
                    {/* wrapper */}
                    <div>

                    </div>
                    {/* wrapper */}
                    <div> 
                         <h3 className="">
                            <Image 
                                src="/images/shape-2.svg" 
                                alt="shape" 
                                width={30} 
                                height={30} 
                            />
                            Introduction
                        </h3> 
                        <p>
                            My journey as a photographer has been a lifelong quest to capture the extraordinary in the ordinary, to freeze fleeting moments in time, and to share the world's beauty as I see it. 
                            Based in the enchanting landscapes of the USA, I find inspiration in every corner of this diverse and vibrant country. Join me as we embark on a visual odyssey, where each photograph tells a story, 
                            and every frame is a piece of my heart.

                        </p>
                    </div>
                    {/*wrapper */}
                    <div>
                        <h3 className="">
                            <Image 
                                src="/images/shape-2.svg" 
                                alt="shape" 
                                width={30} 
                                height={30} 
                            />
                            Introduction
                        </h3>
                        {/* links wrapper*/}
                        <div className="">
                            {/* email address */}
                            <div>
                                <p>Email</p>
                                <a href="mailto:thagshan11@gmail.com" className="">
                                    thagshan11@gmail.com

                                </a>
                            </div>
                            {/* phone number */}
                            <div>
                                <p>Phone Number</p>
                                <a href="tel:+94779984032" className="">
                                    +94779984032
                                </a>
                            </div>
                        </div> 
                    {/* buttons wrapper */}
                    <div className="">
                        {/* Social Icons */}
                        
                    </div>
                </div>
                </div>
           </div>
           </div>
        </section>
    )
}

export default AboutSec;