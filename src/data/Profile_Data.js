// componets

import MyAccount from '../components/ProfileTab/MyAccount/MyAccount';
import DeliveryAddress from '../components/ProfileTab/DeliveryAddress/DeliveryAddress';
import Favorit from '../components/ProfileTab/Favorit/Favorit';
import MyOrder from '../components/ProfileTab/MyOrder/MyOrder';

// icon
import user from '../assets/Profile/user.png';
import heart from '../assets/Profile/heart.png';
import delivery from '../assets/Profile/delivery.png';
import order from '../assets/Profile/order.png';

const Profile_Data = [
  {
    id: 'tab1',
    label: 'My Account',
    icon: user,
    component: <MyAccount />,
  },
  {
    id: 'tab2',
    icon: delivery,
    label: 'Delivery Address',
    component: <DeliveryAddress />,
  },
  {
    id: 'tab3',
    icon: heart,
    label: 'Favorit',
    component: <Favorit />,
  },
  {
    id: 'tab4',
    icon: order,
    label: 'My Last Order',
    component: <MyOrder />,
  },
];

export default Profile_Data;
