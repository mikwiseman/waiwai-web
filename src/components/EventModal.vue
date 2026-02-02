<template>
  <Teleport to="body">
    <div
      v-if="isOpen"
      class="event-modal-overlay"
      @click.self="close"
    >
      <div class="event-modal">
        <button
          class="event-modal-close"
          @click="close"
        >
          &times;
        </button>
        <iframe
          :src="iframeSrc"
          class="event-modal-iframe"
          frameborder="0"
          allow="payment"
        />
      </div>
    </div>
  </Teleport>
</template>

<script>
import { computed, defineComponent, onMounted, onUnmounted } from 'vue'

export default defineComponent({
  name: 'EventModal',
  props: {
    isOpen: {
      type: Boolean,
      default: false
    },
    eventId: {
      type: String,
      default: ''
    }
  },
  emits: ['close'],
  setup(props, { emit }) {
    const MINIAPP_ORIGIN = 'https://wowuni-miniapp.vercel.app'

    const iframeSrc = computed(() => {
      return `${MINIAPP_ORIGIN}?event=e1c192b3-8df3-42ce-aa55-64c8000ada25`
    })

    const close = () => {
      emit('close')
    }

    const handleMessage = (event) => {
      if (event.origin !== MINIAPP_ORIGIN) return

      if (event.data?.type === 'MINIAPP_READY') {
        // Miniapp confirmed it loaded successfully
        console.log('Miniapp ready')
      }

      if (event.data?.type === 'REGISTRATION_COMPLETE') {
        // User completed registration, close modal
        close()
      }
    }

    const handleKeydown = (event) => {
      if (event.key === 'Escape' && props.isOpen) {
        close()
      }
    }

    onMounted(() => {
      window.addEventListener('message', handleMessage)
      window.addEventListener('keydown', handleKeydown)
    })

    onUnmounted(() => {
      window.removeEventListener('message', handleMessage)
      window.removeEventListener('keydown', handleKeydown)
    })

    return {
      iframeSrc,
      close
    }
  }
})
</script>

<style scoped>
.event-modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.85);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 9999;
}

.event-modal {
  position: relative;
  width: 90%;
  max-width: 500px;
  height: 85vh;
  max-height: 750px;
  background: var(--deep-blue-surface, #041632);
  border-radius: 1rem;
  border: 1px solid var(--deep-blue-border-strong, rgba(18, 76, 156, 0.32));
  overflow: hidden;
  box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.5);
}

.event-modal-close {
  position: absolute;
  top: 0.75rem;
  right: 0.75rem;
  width: 2.5rem;
  height: 2.5rem;
  background: rgba(255, 255, 255, 0.1);
  border: none;
  border-radius: 50%;
  color: #fff;
  font-size: 1.75rem;
  line-height: 1;
  cursor: pointer;
  z-index: 1;
  transition: background 0.2s;
  display: flex;
  align-items: center;
  justify-content: center;
}

.event-modal-close:hover {
  background: rgba(255, 255, 255, 0.2);
}

.event-modal-iframe {
  width: 100%;
  height: 100%;
  border: none;
}

@media (max-width: 767px) {
  .event-modal {
    width: 100%;
    height: 100%;
    max-width: none;
    max-height: none;
    border-radius: 0;
  }

  .event-modal-close {
    top: 0.5rem;
    right: 0.5rem;
  }
}
</style>
