import  {FaHeart} from 'react-icons/fa'
import { Button } from '../ui/button';

function FavoriteToggleButton({productId}:{productId:String}) {
  return <Button size='icon' variant='outline' className='p-2 curser-pointer'>
    <FaHeart/>
  </Button>;
}

export default FavoriteToggleButton;
