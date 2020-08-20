import React from "react";
import cn from "classnames";

import styles from "./text-body.module.css";

function TextBody({ bold = false, className, children, ...props }) {
  return (
    <span
      className={cn([styles.body, bold && styles.bold, className])}
      // className'i sona koymak önemli çünkü tüm stiller uygulandıktan sonra dışardan gelen ezebilsin diye
      {...props}
    >
      {children}
    </span>
  );
}

export default TextBody;
