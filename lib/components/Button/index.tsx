import styles from "./styles.module.css";

export function Button(props: React.ButtonHTMLAttributes<HTMLButtonElement>) {
  const { className, ...restProps } = props;
  console.log(styles.button_56);
  console.log("render button");
  return (
    <button className={`${className} ${styles.button_56}`} {...restProps} />
  );
}
