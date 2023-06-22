export default {
    template: /*html*/
    `
    <div class="flex gap-2">
        <button
            v-for="tag in tags"
            class="border rounded px-1 py-px text-xs"
            @click="$emit('update:currentTag', tag)"
            :class="{
                'border-blue-500 text-blue-500': tag === currentTag,
                'border-blue-300 text-blue-300': tag === hoveredTag
            }"
            @mouseover="$emit('update:hoveredTag', tag)"
            @mouseleave="$emit('update:hoveredTag', '')"
        >
            {{ tag }}
        </button>
    </div>
    `,

    props: {
        initialTags: Array,
        currentTag: String,
        hoveredTag: String,
    },

    emits: [
        'update:currentTag',
        'update:hoveredTag',
    ],

    computed: {
        tags() {
            return ['all', ...new Set(this.initialTags)]
        }
    }
}