import CountdownTimer from "../home/CountdownTimer";
import styles from "../style";


function Time() {
    return (
        <section className={`${styles.flexCenter}`}>
        <div className="flex items-center justify-center rounded-[24px]  bg-goldd mx-auto">
            <CountdownTimer />
        </div>
        </section>
    );
}

export default Time;
