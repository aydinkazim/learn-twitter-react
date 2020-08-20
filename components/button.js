import React from "react";
import cn from "classnames";
import Link from "next/link";

import styles from "./button.module.css";

function LinkButton({ href, children, ...props }) {
  return (
    <Link href={href}>
      <a {...props}>{children}</a>
    </Link>
  );
}

// bazı durumlarda <a> bazı durumlarda <button> olması için comp. çoklayacağız

function BaseButton({ children, ...props }) {
  return (
    <button
      type="button"
      // className={cn(styles.button, full && styles.fullWidth, className)}
      // bu özellik artık aşağıdan geleceği için kaldırıyoruz
      {...props}
    >
      {children}
    </button>
  );
}

function Button({ full = false, children, className, ...props }) {
  const Comp = props.href ? LinkButton : BaseButton;
  // eğer LinkButton'sa bütün parametreleri(propsları) LinkButton'a
  // eğer BaseButton'sa bütün parametreleri(propsları) BaseButton'a
  // o yüzden complar içindeki classname ve full gibi özellikleri
  //  ordan siliyoruz çünkü burdan prop olarak gidecek***
  return (
    // burada da <button> yerine artık üstte const olarak tanımladığımız
    // Button gelecek
    <Comp
      type="button"
      className={cn(styles.button, full && styles.fullWidth, className)}
      // && işareti => full diye bi şey gelirse bundan sonraki adımları yap demek
      {...props}
    >
      {children}
    </Comp>
  );
}

export default Button;
