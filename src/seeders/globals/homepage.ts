import { Homepage } from "@/payload-types";
import { GlobalSeed } from "@/seeders/type";

export const homepageData: GlobalSeed<Homepage> = {
  slug: 'homepage',
  data: {
    maincourseSection: {
      maincourseTitle: 'Main Course',
      maincourseSubtitle: 'Delicious and hearty dishes to satisfy your hunger.',
      maincourses: [
        {
          maincourseName: 'Black Pepper Chicken Chop',
          maincoursePicture: 1,
          maincoursePrice: 12.90,
        },
        {
          maincourseName: 'Grilled Salmon with Lemon Butter',
          maincoursePicture: 2,
          maincoursePrice: 15.90,
        },
        {
          maincourseName: 'Bolognese Spaghetti',
          maincoursePicture: 3,
          maincoursePrice: 11.90,
        },
        {
          maincourseName: 'Steamed Fish with Soy Sauce',
          maincoursePicture: 4,
          maincoursePrice: 13.90,
        },
        {
          maincourseName: 'Fried Noodles',
          maincoursePicture: 5,
          maincoursePrice: 9.90,
        },
        {
          maincourseName: 'Fried Rice with Egg and Meat',
          maincoursePicture: 6,
          maincoursePrice: 10.90,
        },
        {
          maincourseName: 'Mushroom Soup',
          maincoursePicture: 7,
          maincoursePrice: 6.90,
        },
        {
          maincourseName: '咸菜豆腐汤',
          maincoursePicture: 8,
          maincoursePrice: 7.90,
        },
        {
          maincourseName: '肉碎corn',
          maincoursePicture: 9,
          maincoursePrice: 8.90,
        },
        {
          maincourseName: '番茄炒蛋',
          maincoursePicture: 10,
          maincoursePrice: 9.90,
        },
        {
          maincourseName: '包菜炒蛋',
          maincoursePicture: 11,
          maincoursePrice: 9.90,
        },
        {
          maincourseName: '白萝卜汤',
          maincoursePicture: 12,
          maincoursePrice: 7.90,
        },
        {
          maincourseName: '番茄汤',
          maincoursePicture: 13,
          maincoursePrice: 6.90,
        },
      ],
    },
    snackSection: {
      snackTitle: 'Snacks',
      snackSubtitle: 'Tasty treats to keep you going throughout the day.',
      snacks: [
        {
          snackName: 'French Fries',
          snackPicture: 14,
          snackPrice: 4.90,
        },
        {
          snackName: 'Mini Sausage',
          snackPicture: 15,
          snackPrice: 3.90,
        },
        {
          snackName: '炸鸡柳',
          snackPicture: 16,
          snackPrice: 5.90,
        },
        {
          snackName: '土豆饼',
          snackPicture: 17,
          snackPrice: 4.90,
        },
      ],
    },
    bevarageSection: {
      bevarageTitle: 'Beverages',
      bevarageSubtitle: 'Refreshing drinks to quench your thirst.',
      bevarages: [
        {
          bevarageName: 'Iced Lemon Tea',
          bevaragePicture: 18,
          bevaragePrice: 2.90,
        },
        {
          bevarageName: 'Coca Cola',
          bevaragePicture: 19,
          bevaragePrice: 3.90,
        },
        {
          bevarageName: 'Orange Juice',
          bevaragePicture: 20,
          bevaragePrice: 4.90,
        },
        {
          bevarageName: '矿泉水',
          bevaragePicture: 21,
          bevaragePrice: 1.90,
        },
        {
          bevarageName: '绿茶',
          bevaragePicture: 22,
          bevaragePrice: 2.90,
        },
        {
          bevarageName: '奶茶',
          bevaragePicture: 23,
          bevaragePrice: 3.90,
        },
        {
          bevarageName: '咖啡',
          bevaragePicture: 24,
          bevaragePrice: 4.90,
        },
      ],
    },
  },
}