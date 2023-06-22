export default {
    template: /*html*/
    `
    <li
        class="px-2 py-1 grid grid-rows-2 grid-cols-3 grid-flow-row align-middle cursor-pointer hover:bg-blue-900"
        @click="assignment.complete = ! assignment.complete"
    >
        <label class="row-span-1 col-span-2 cursor-pointer" for="assignment-complete-{{assignment.name}}">
            {{ assignment.name }}
        </label>
        <input
            id="assignment-complete-{{assignment.name}}"
            type="checkbox"
            v-model="assignment.complete"
            class="place-self-center justify-items-end row-span-2 col-span-1 h-4 w-4 ml-10 cursor-pointer"
        >
        <span
            class="text-xs text-gray-500 row-span-1 col-span-2 cursor-pointer"
            :class="{
                'text-blue-300': (assignment.tag === hoveredTag || hoveredTag === 'all')
            }"
        >
            {{assignment.tag}}
        </span>
    </li>
    `,

    props: {
        assignment: Object,
        hoveredTag: String,
    }
}