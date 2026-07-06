import styles from "@/assets/style/component/Show/RandomTalk.module.css";
import { useEffect, useState, type ReactNode } from "react";
import { getTalk } from "@/utils";
import type { HitokotoResponse, Talk } from "@/types";

function RandomTalk(): ReactNode {
  const [loading, setLoading] = useState<boolean>(true);
  const [talk, setTalk] = useState<Talk>({
    content: "",
    author: "",
  });

  useEffect((): void => {
    async function getTalkText(): Promise<void> {
      try {
        const request: HitokotoResponse = await getTalk();
        setLoading(true);
        setTalk({
          content: request.hitokoto,
          author: request.from_who || request.from,
        });
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    }
    getTalkText();
  }, []);

  if (loading) {
    return (
      <div className={styles.randomTalk}>
        <h3 className={styles.loading}>加载中...</h3>
      </div>
    );
  }

  return (
    <div className={styles.randomTalk}>
      <p className={styles.randomTalkText}>{talk.content}</p>
      <p className={styles.randomTalkAuthor}>——《{talk.author}》</p>
    </div>
  );
}

export default RandomTalk;
