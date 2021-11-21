<template>
  <div>
    <!-- <Todos /> -->
    <!-- <calendar /> -->
    <qrcode-stream />
  </div>
</template>
<script>
import { QrcodeStream, QrcodeDropZone, QrcodeCapture } from 'vue-qrcode-reader'
import VueQrcodeReader from 'vue-qrcode-reader'

import Calendar from '../../components/Calendar.vue'
import CardHeading from '../../components/CardHeading.vue'
import CardTitle from '../../components/CardTitle.vue'
export default {
  components: { CardTitle },
  methods: {
    onDecode(decodedString) {
      // ...
    }
  },
  data() {
    Calendar
    CardHeading, Calendar

    return {
      projects: [
        {
          project_name: 'Project Management System',
          project_client: 'Adrian Van Ladrillano',
          project_type: 'Management',
          project_logo:
            'https://images.vexels.com/media/users/3/137617/isolated/preview/c45afb857e72b86e87baaf255f71ff37-geometric-logo-abstract-by-vexels.png'
        },
        {
          project_name: 'IMHOME.PH',
          project_client: 'Anjo Liwanag',
          project_type: 'Real Estate',
          project_logo:
            'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQWJWM23XNBWzMehQ4br6vdAPzmgbgBs_e69g&usqp=CAU'
        },
        {
          project_name: 'Expense Tracker',
          project_client: 'Justine Mae Rafael',
          project_type: 'Finance',
          project_logo:
            'https://appinstitute.com/apptools/wp-content/uploads/2016/07/MK1nK9oz-4.png'
        },
        {
          project_name: 'Locker',
          project_client: 'Adrian Van Ladrillano',
          project_type: 'Personal',
          project_logo:
            'https://blog.thehoya.com/wp-content/uploads/2015/03/fox2.jpeg'
        }
      ]
    }
  }
}
</script>
