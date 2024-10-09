import Image from "next/image"
import Link from "next/link"

export default function Page() {
  return (
    <section>
      <div className="col-1">
        <Image src={'/photo.jpg'} width={1000} height={1000} alt="Dmitrii Kapustin"/>
        <h1>
          <strong>Dmitrii Kapustin</strong>
          <br/>
          <small style={{fontWeight: 400, opacity: 0.8}}>IT enterpreneur</small>
        </h1>
      </div>
      <div className="col-2">
        <div className="text">
          <p><strong>12 years experience</strong> in software development, design, creative and product launches.</p>
          <p>Since 2013 I have been working in the IT industry in UI/UX, graphic design, Full-stack development, creative concepts and products development.</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto laboriosam quas harum, obcaecati voluptate nostrum enim vel omnis! Laudantium dicta, quos quibusdam odio veritatis labore nam! Sunt similique perferendis maxime.</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto laboriosam quas harum, obcaecati voluptate nostrum enim vel omnis! Laudantium dicta, quos quibusdam odio veritatis labore nam! Sunt similique perferendis maxime.</p>
        </div>
        {/* <div className="contacts">
          <p>Для связи: <strong>Кто-то</strong></p>
        </div> */}
        <div className="btns-container">
          <Link className="button" href={'https://t.me/dmitriikapustin'}>Message in Telegram</Link>
          {/* <Link className="button" href={'mailto:pochta@mail.ru'}>dmitrii@kapustin.team</Link> */}
        </div>
      </div>
    </section>
  )
}