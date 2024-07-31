import SectionHeading from "../../Helper/SectionHeading"
import BlogCard from "./BlogCard"


const Blog = () => {
  return (
    <div className='mt-20 pb-16'>
      {/* section Heading */}
      <SectionHeading heading='Our Blog' />
      {/* define grid system */}
      <div className='w-4/5 mt-12 md:mt-16 grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-12 mx-auto'>
        {/* 1st blog Card */}
        <div
          data-aos="zoom-out"
          data-aos-anchor-placement="top-center"
          data-aos-delay="200"
        >
          <BlogCard
            image="/images/b1.png"
            title="10 Reason to use good web hosting"
            date="4 May, 2024"
            username="sajal"
            userRole="we developer"
            userImage="/images/c1.png"
          />
        </div>
        <div
          data-aos="zoom-out"
          data-aos-anchor-placement="top-center"
          data-aos-delay="400"
        >
          <BlogCard
            image="/images/b2.png"
            title="12 Reason to use good web hosting"
            date="5 May, 2024"
            username="jhon"
            userRole="NextJS Developer"
            userImage="/images/c2.png"
          />
        </div>
        <div
          data-aos="zoom-out"
          data-aos-anchor-placement="top-center"
          data-aos-delay="600"
        >
          <BlogCard
            image="/images/b3.png"
            title="7 Reason to use good web hosting"
            date="10 May, 2024"
            username="Jack"
            userRole="Recat developer"
            userImage="/images/c3.png"
          />
        </div>
      </div>
    </div>
  )
}

export default Blog