<template>
    <div class="quiz">
        <div class="content">
            <div class="title">
                <h4>Chapter 1 : Reading, Writing and Speaking</h4>
            </div>
            <form class="question" @submit.prevent="submit">
                <div class="question-column" v-for="(quiz, i) in list_mapel.quiz" :key="quiz.question_id">
                    <h6>{{ quiz.question }}</h6>
                    <div class="answer-column" v-for="choice in quiz.choice" :key="choice.choice_id">
                        <div class="answer-row">
                            <input :name="quiz.question_id" type="radio" :value="choice.choice_score"
                                v-model="choice_score[i]">
                            <label>{{ choice.choice_name }}</label>
                        </div>
                    </div>
                </div>
                <div class="question-column">
                    <h6>4. Tell about your self</h6>
                    <div class="answer-column-four">
                        <div class="answer-row">
                            <textarea name="four" id="four" cols="30" rows="10"
                                placeholder="Write in here!!"></textarea>
                        </div>
                    </div>
                </div>
                <button type="submit" class="btn">Selesai</button>
            </form>
        </div>
    </div>
</template>

<script>
import CONFIG from '@/global/config';

export default {
    name: 'QuizChapter',
    props: {
        list_mapel: Array,
    },
    data() {
        return {
            id: this.$route.params.id,
            sub_mapel_id: '',
            alphabet: [...'ABCDEFGHIJKLMNOPQRSTUVWXYZ'],
            choice_score: [],
        }
    },
    watch: {
        list_mapel() {
            this.sub_mapel_id = this.list_mapel.quiz[0].sub_mapel_id;
        }
    },
    methods: {
        async submit() {
            // get score
            if (this.choice_score.length != this.list_mapel.quiz.length) {
                return alert('mohon diisi semua jawabannya');
            }
            let scoreOfChoice = 0;
            this.choice_score.forEach(scoree => {
                scoreOfChoice += scoree;
            });
            const score = 100 * scoreOfChoice / this.list_mapel.quiz.length;
            const data = {
                id: this.id,
                sub_mapel: this.sub_mapel_id,
                score
            }
            const response = await fetch(CONFIG.BASE_URL + '/score/add', {
                method: 'POST',
                headers: { 'Content-Type': 'Application/json' },
                credentials: 'include',
                body: JSON.stringify(data),
            });
            const json = await response.json();
            return alert(json.meta.messages);
        }
    }
};
</script>

<style scoped>
* {
    margin: 0;
    padding: 0;
}

h4 {
    font-size: 36px;
    font-weight: 500;
    color: #404040;
}

.quiz {
    font-family: 'Poppins';
    width: 1440px;
    height: max-content;
    overflow: auto;
}

.container {
    display: flex;
    width: 100%;
    height: 100%;
}

.sidebar {
    padding-top: 63px;
    background-color: #FA8432;
    width: 280px;
    display: flex;
    flex-direction: column;
}

ul {
    margin-bottom: 26px;
    list-style-type: none;
    overflow: auto;
}

li {
    margin-bottom: 20px;
}

li a {
    display: block;
    padding-left: 24px;
    color: white;
    text-decoration: none;
    font-size: 18px;
    font-weight: 500;
}

li a.active {
    padding-top: 17px;
    padding-bottom: 16px;
    background-color: #E45F03;
    color: white;
}

li a:hover:not(.active) {
    color: #E45F03;
}

.kembali {
    padding-left: 24px;
    display: flex;
    align-items: center;
    margin-bottom: 50px;
}

.kembali img {
    width: 24px;
    height: 24px;
}

.kembali a {
    font-size: 20px;
    font-weight: 400;
    margin-left: 10px;
    color: white;
    text-decoration: none;
}

.content {
    width: 100%;
    margin-left: 70px;
    margin-top: 50px;
}

.question {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 0px;
    gap: 50px;
    margin-top: 52px;
    margin-bottom: 15px;
}

.question h6 {
    font-weight: 400;
    font-size: 18px;
    line-height: 27px;
    letter-spacing: 0.01em;
    color: #404040;
}

.question-column {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 0px;
    gap: 21px;
}

.answer-column {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 0px 20px;
    gap: 20px;

    flex: none;
    order: 1;
    flex-grow: 0;

    font-weight: 600;
    font-size: 18px;
    line-height: 27px;
    letter-spacing: 0.01em;
    color: #404040;

}

.answer-column input {
    padding: 10px 15px;
    gap: 10px;
    border-style: none;
    width: 43px;
    height: 47px;
    color: #404040;
    background: #DCD9D1;
    font-weight: 600;
    font-size: 18px;
    line-height: 27px;
    letter-spacing: 0.01em;
}

.answer-column input:focus {
    padding: 10px 15px;
    gap: 10px;
    border-style: none;
    width: 43px;
    height: 47px;
    color: #fff;
    background: #E45F03;
    font-weight: 600;
    font-size: 18px;
    line-height: 27px;
    letter-spacing: 0.01em;
}

.answer-row {
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: 0px;
    gap: 15px;
    flex: none;
    order: 0;
    flex-grow: 0;
}

.btn {
    width: 90px;
    height: 60px;
    background-color: #E45F03;
    color: white;
    border-radius: 10px;
    border: none;
    font-size: 18px;
    font-weight: 600;
    margin-bottom: 30px;
    margin-left: 1000px;
}
</style>