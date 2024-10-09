import Image from "next/image"
import Link from "next/link"

export default function Page() {
  return (
    <section>
      <div className="col-1">
        <Image src={'/photo.webp'} width={500} height={500} alt="Дмитрий Капустин"/>
        <h1>
          <strong>Дмитрий Капустин</strong>
          <br/>
          <small>Tech Entrepreneur</small>
        </h1>
      </div>
      <div className="col-2">
        <div className="text">
          <p><strong>Lorem ipsum dolor</strong> sit amet consectetur adipisicing elit. Architecto laboriosam quas harum, obcaecati voluptate nostrum enim vel omnis! Laudantium dicta, quos quibusdam odio veritatis labore nam! Sunt similique perferendis maxime.</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto laboriosam quas harum, obcaecati voluptate nostrum enim vel omnis! Laudantium dicta, quos quibusdam odio veritatis labore nam! Sunt similique perferendis maxime.</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto laboriosam quas harum, obcaecati voluptate nostrum enim vel omnis! Laudantium dicta, quos quibusdam odio veritatis labore nam! Sunt similique perferendis maxime.</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto laboriosam quas harum, obcaecati voluptate nostrum enim vel omnis! Laudantium dicta, quos quibusdam odio veritatis labore nam! Sunt similique perferendis maxime.</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto laboriosam quas harum, obcaecati voluptate nostrum enim vel omnis! Laudantium dicta, quos quibusdam odio veritatis labore nam! Sunt similique perferendis maxime.</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto laboriosam quas harum, obcaecati voluptate nostrum enim vel omnis! Laudantium dicta, quos quibusdam odio veritatis labore nam! Sunt similique perferendis maxime.</p>
        </div>
        <div className="contacts">
          <p>Для связи: <strong>Кто-то</strong></p>
        </div>
        <div className="btns-container">
          <Link className="button" href={'tel:89999999999'}>+8-999-999-99-99</Link>
          <Link className="button" href={'mailto:pochta@mail.ru'}>pochta@mail.ru</Link>
        </div>
      </div>
    </section>
  )
}