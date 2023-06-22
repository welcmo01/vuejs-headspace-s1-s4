import AssignmentCreate from "./AssignmentCreate.js";
import AssignmentList from "./AssignmentList.js";

export default {
    template: /*html*/
    `
    <section class="flex gap-12">
        <assignment-list :assignments="filters.inProgress" title="In Progress">
            <assignment-create @add="add"></assignment-create>
        </assignment-list>
        <assignment-list
            v-show="showCompleted"
            :assignments="filters.completed"
            title="Completed"
            can-toggle
            @toggle="showCompleted = !showCompleted"
        ></assignment-list>

    </section>
    `,

    components: { AssignmentList, AssignmentCreate },

    data() {
        return {
            assignments: [
                { id: 1, name: 'Finish project', complete: false, tag: 'math' },
                { id: 2, name: 'Read chapter 4', complete: false, tag: 'science' },
                { id: 3, name: 'Turn in homework', complete: true, tag: 'math' },
            ],
            showCompleted: true
        };
    },

    computed: {
        filters() {
            return {
                inProgress: this.assignments.filter(a => ! a.complete),
                completed: this.assignments.filter(a => a.complete)
            }
        }
    },

    methods: {
        add(name) {
            this.assignments.push({
                id: this.assignments.length + 1,
                name: name,
                completed: false
            })
        }
    }
}