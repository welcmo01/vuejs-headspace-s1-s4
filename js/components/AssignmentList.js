import Assignment from "./Assignment.js"
import AssignmentTags from "./AssignmentTags.js"
import Panel from "./Panel.js"

export default {
    template: /*html*/
    `
    <panel class="w-62 h-fit relative"
        v-show="assignments.length > 0"
    >
        <div>
            <h2 class="font-bold mb-2">
                {{ title }}
                <span class="float-right font-thin text-gray-500 ">{{ assignments.length }}</span>
            </h2>

        </div>

        <assignment-tags
            v-model:currentTag="currentTag"
            v-model:hoveredTag="hoveredTag"
            :initial-tags="assignments.map(assignment => assignment.tag)"
        ></assignment-tags>

        <section class="mb-5">
            <ul class="border border-gray-600 divide-y divide-gray-600 mt-6 rounded">
                <assignment
                    v-model:hoveredTag="hoveredTag"
                    v-for="assignment in filteredAssignments"
                    :key="assignment.id"
                    :assignment="assignment"
                ></assignment>
            </ul>

            <slot></slot>
        </section>

        <button
            class="absolute bottom-1 right-2 text-red-600"
            v-show="canToggle"
            @click="$emit('toggle')"
        >&times;</button>

    </panel>
    `,

    components: { Assignment, AssignmentTags, Panel },

    props: {
        assignments: Array,
        title: String,
        canToggle: { type: Boolean, default: false }
    },

    data() {
        return {
            currentTag: 'all',
            hoveredTag: '',
        }
    },

    computed: {
        filteredAssignments() {
            return this.currentTag === 'all' ? this.assignments : this.assignments.filter(assignment => assignment.tag === this.currentTag)
        },
    }
}