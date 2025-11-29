<script setup lang="ts">
// third party
import { BImg, BTableSimple, BTbody, BTr, BTd, BBadge } from 'bootstrap-vue-next'

// common components
import CardHeader from '@/components/shared/CardHeader.vue'

// assets
import Img1 from '@/assets/images/user/avatar-1.jpg'
import Img2 from '@/assets/images/user/avatar-2.jpg'
import Img3 from '@/assets/images/user/avatar-3.jpg'

const users = [
  {
    name: 'Isabella Christensen',
    message: 'Lorem Ipsum is simply dummy text of…',
    status: 'success',
    date: '11 MAY 12:56',
    avatar: Img1,
  },
  {
    name: 'Mathilde Andersen',
    message: 'Lorem Ipsum is simply dummy text of…',
    status: 'danger',
    date: '11 MAY 10:35',
    avatar: Img2,
  },
  {
    name: 'Karla Sorensen',
    message: 'Lorem Ipsum is simply dummy text of…',
    status: 'success',
    date: '9 MAY 17:38',
    avatar: Img3,
  },
  {
    name: 'Ida Jorgensen',
    message: 'Lorem Ipsum is simply dummy text of…',
    status: 'danger',
    date: '19 MAY 12:56',
    avatar: Img1,
  },
]
</script>

<template>
  <CardHeader title="Recent Users" class="Recent-Users" body-class="px-0 py-0 table-body">
    <BTableSimple class="mb-0" responsive hover>
      <BTbody>
        <BTr v-for="(user, index) in users" :key="index" class="unread">
          <BTd>
            <BImg :src="user.avatar" rounded="circle" style="width: 40px" alt="activity-user" />
          </BTd>
          <BTd>
            <h6 class="mb-1">{{ user.name }}</h6>
            <p class="m-0">{{ user.message }}</p>
          </BTd>
          <BTd>
            <h6 class="text-muted">
              <i
                :class="`wid-10 hei-10 d-inline-block rounded-circle bg-${user.status} f-10 m-r-10`"
              ></i>
              {{ user.date }}
            </h6>
          </BTd>
          <BTd>
            <BBadge tag="a" href="#!" :variant="null" class="bg-brand-color-2 text-white f-12 me-2"
              >Reject</BBadge
            >
            <BBadge tag="a" href="#!" :variant="null" class="bg-brand-color-1 text-white f-12"
              >Approve</BBadge
            >
          </BTd>
        </BTr>
      </BTbody>
    </BTableSimple>
  </CardHeader>
</template>
