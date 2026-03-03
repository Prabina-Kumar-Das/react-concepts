// import React, { useRef } from 'react'
// // import './UseRefHookTask1.css'
// import { MdDarkMode } from 'react-icons/md'

// const UseRefHookTask1 = () => {
//   const themeRef = useRef()

//   const changeTheme = () => {
//     themeRef.current.classList.toggle('dark')
    
//     // console.log(themeRef.current.classList.value)
//   }
//   return (
//     <div className='homepage' ref={themeRef}>
//       <button onClick={changeTheme}><MdDarkMode className='icon' /></button>


//       <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quas, accusamus eos. Est provident eligendi maiores sed rem illum voluptatem praesentium ut quos molestias? Facere dolores quaerat eaque cum sit perferendis adipisci laboriosam similique suscipit praesentium doloribus sequi ex autem veritatis, ipsam nisi tempora saepe laudantium eius quam dolorem expedita sed! Eligendi nulla laborum vero ut atque harum obcaecati expedita minima dolores esse, fuga quos voluptate commodi error labore, fugiat distinctio incidunt accusantium dicta facere deleniti corporis id. Sapiente et aut illum ea necessitatibus deserunt natus exercitationem possimus. Aut excepturi ad deleniti maiores atque debitis quam quibusdam! Eligendi ut laboriosam, tempora suscipit incidunt quae quasi ad error voluptas dolore reiciendis illo pariatur, impedit illum eius excepturi minima sed consectetur dignissimos vero? Aperiam aut voluptate sint id ipsa earum exercitationem, quam quidem laborum atque nemo! Quisquam nihil inventore blanditiis provident eos cum repellat nisi praesentium esse ad quos dicta illum nostrum aperiam, illo ducimus laborum? Velit animi aliquid ea nesciunt suscipit culpa debitis possimus eius autem laborum, eos quia voluptate enim. Distinctio odio quis repellendus deleniti! Deserunt numquam aliquam autem illum non molestiae doloribus ipsam est quaerat at eius reprehenderit quisquam placeat, et obcaecati magni eos exercitationem fugit cum vel modi reiciendis? Dolorem accusantium aliquam amet omnis officiis eum quibusdam ipsam maiores enim ratione? Similique autem voluptates nulla. Iusto recusandae quaerat saepe perspiciatis dolorem aliquid iure voluptas aliquam ipsa maiores optio, sequi accusamus ex vel nihil mollitia cumque nostrum officiis. Voluptate voluptatem rerum veniam similique illo, provident alias consequuntur sunt omnis! Hic a facere earum ipsam magnam. Tempora quod esse eum pariatur ex rerum ea placeat, nobis veritatis debitis quisquam eligendi, provident ad excepturi assumenda atque culpa. Aperiam adipisci ab eos error minima sit doloremque suscipit quis eveniet iste dignissimos dolore repudiandae impedit animi, odio corrupti expedita sed magni, mollitia praesentium. Non et ratione commodi perferendis veniam architecto, nam perspiciatis inventore, reprehenderit praesentium a doloremque. Similique odit itaque quas mollitia vero suscipit sapiente rem ad aperiam minima labore quia, sequi consectetur veritatis recusandae est. Eveniet est illum ab dolorem atque consectetur numquam velit recusandae? Doloremque natus nisi aspernatur modi expedita est asperiores veniam harum nemo illum quidem animi quibusdam repudiandae earum, incidunt vero iste necessitatibus sit reprehenderit facilis ex temporibus distinctio assumenda inventore. Dignissimos, odit quaerat! Esse temporibus voluptatibus nulla totam voluptatem architecto, sequi tempore, reiciendis aspernatur alias quis? Debitis soluta obcaecati impedit, molestias porro totam voluptate veritatis aliquam, officia eum placeat?</p>
//     </div>
//   )
// }

// export default UseRefHookTask1



import React, { useRef } from "react";
import { MdDarkMode } from "react-icons/md";

const UseRefHookTask1 = () => {
  const themeRef = useRef(null);

  const changeTheme = () => {
    themeRef.current.classList.toggle("dark");
  };

  return (
    <div
      ref={themeRef}
      className="homepage min-h-screen w-full bg-white text-black dark:bg-black dark:text-white"
    >
      <button
        onClick={changeTheme}
        className="m-3 rounded-md p-3 transition-all duration-300 hover:bg-black dark:hover:bg-white"
      >
        <MdDarkMode className="text-[30px] hover:text-white dark:hover:text-black" />
      </button>

      <p className="p-4 text-[25px] leading-relaxed">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quas,
        accusamus eos. Est provident eligendi maiores sed rem illum voluptatem
        praesentium ut quos molestias? Facere dolores quaerat eaque cum sit
        perferendis adipisci laboriosam similique suscipit praesentium doloribus
        sequi ex autem veritatis, ipsam nisi tempora saepe laudantium eius quam
        dolorem expedita sed! Eligendi nulla laborum vero ut atque harum
        obcaecati expedita minima dolores esse, fuga quos voluptate commodi error
        labore, fugiat distinctio incidunt accusantium dicta facere deleniti
        corporis id...
      </p>
    </div>
  );
};

export default UseRefHookTask1;
