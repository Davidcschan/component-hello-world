import styles from "./styles.module.css";

export function Label(props: React.ButtonHTMLAttributes<HTMLLabelElement>) {
  const { className, ...restProps } = props;
  return <label className={`${className} ${styles.button}`} {...restProps} />;
}
