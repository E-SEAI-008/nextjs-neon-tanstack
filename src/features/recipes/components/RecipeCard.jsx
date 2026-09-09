import Image from 'next/image';
import { faClock } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBowlFood } from '@fortawesome/free-solid-svg-icons';

function RecipeCard({ recipe: { title, duration, category, image, servings } }) {
  return (
    <div className='card bg-base-100 image-full w-60 h-60 shadow-sm'>
      <figure>
        <Image src={image} alt={title} width={384} height={256} />
      </figure>
      <div className='card-body justify-between text-white'>
        <h2 className='card-title'>{title}</h2>
        <div className='flex flex-col gap-2'>
          <div className='flex gap-2'>
            <p>
              <FontAwesomeIcon icon={faClock} className='mr-2' />
              {duration}
            </p>
            <p>
              <FontAwesomeIcon icon={faBowlFood} className='mr-2' />
              {servings}
            </p>
          </div>
          <div className='card-actions justify-start'>
            <div className='badge badge-outline'>{category}</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default RecipeCard;