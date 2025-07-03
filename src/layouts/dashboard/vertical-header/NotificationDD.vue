<script setup lang="ts">
// third party
import { BDropdown, BDropdownHeader, BDropdownText, BCard } from 'bootstrap-vue-next'
import SimpleBar from 'simplebar-vue'
</script>

<template>
  <li>
    <BDropdown
      variant="link"
      wrapper-class="dropdown pc-h-item"
      toggle-class="pc-head-link me-0"
      menu-class="dropdown-notification dropdown-menu-end pc-h-dropdown"
      no-caret
      aria-label="Notification"
    >
      <template #button-content>
        <a href="#" class="pc-head-link mx-0 position-static" aria-label="Notification">
          <i class="ph ph-bell"></i>
          <span class="badge bg-success pc-h-badge">3</span>
        </a>
        <span class="visually-hidden">Notification</span>
      </template>
      <BDropdownHeader tag="h5" header-class="d-flex align-items-center justify-content-between">
        <h5 class="m-0">Notifications</h5>
        <a href="#!" class="btn btn-link btn-sm">Mark all read</a>
      </BDropdownHeader>

      <SimpleBar
        style="height: calc(100vh - 215px); overflow-x: hidden"
        :options="{ autoHide: false }"
      >
        <div class="dropdown-body header-notification-scroll">
          <BDropdownText text="Today" text-class="text-span p-0" tag="p" />
          <BDropdownText text-class="p-0">
            <BCard class="mb-0">
              <div class="d-flex">
                <div class="flex-shrink-0">
                  <img
                    class="img-radius avatar rounded-0"
                    src="@/assets/images/user/avatar-1.jpg"
                    alt="Generic placeholder image"
                  />
                </div>
                <div class="flex-grow-1 ms-3">
                  <span class="float-end text-sm text-muted">2 min ago</span>
                  <h5 class="text-body mb-2">UI/UX Design</h5>
                  <p class="mb-0">
                    Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                    when an unknown printer took a galley of type and scrambled it to make a type
                  </p>
                </div>
              </div>
            </BCard>
          </BDropdownText>
          <BDropdownText text-class="p-0">
            <BCard class="mb-0">
              <div class="d-flex">
                <div class="flex-shrink-0">
                  <img
                    class="img-radius avatar rounded-0"
                    src="@/assets/images/user/avatar-2.jpg"
                    alt="Generic placeholder image"
                  />
                </div>
                <div class="flex-grow-1 ms-3">
                  <span class="float-end text-sm text-muted">1 hour ago</span>
                  <h5 class="text-body mb-2">Message</h5>
                  <p class="mb-0">
                    Lorem Ipsum has been the industry's standard dummy text ever since the 1500.
                  </p>
                </div>
              </div>
            </BCard>
          </BDropdownText>
          <BDropdownText text="Yesterday" text-class="text-span p-0" tag="p" />
          <BDropdownText text-class="p-0">
            <BCard class="mb-0">
              <div class="d-flex">
                <div class="flex-shrink-0">
                  <img
                    class="img-radius avatar rounded-0"
                    src="@/assets/images/user/avatar-3.jpg"
                    alt="Generic placeholder image"
                  />
                </div>
                <div class="flex-grow-1 ms-3">
                  <span class="float-end text-sm text-muted">2 hour ago</span>
                  <h5 class="text-body mb-2">Forms</h5>
                  <p class="mb-0">
                    Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                    when an unknown printer took a galley of type and scrambled it to make a type
                  </p>
                </div>
              </div>
            </BCard>
          </BDropdownText>
          <BDropdownText text-class="p-0">
            <BCard class="mb-0">
              <div class="d-flex">
                <div class="flex-shrink-0">
                  <img
                    class="img-radius avatar rounded-0"
                    src="@/assets/images/user/avatar-4.jpg"
                    alt="Generic placeholder image"
                  />
                </div>
                <div class="flex-grow-1 ms-3">
                  <span class="float-end text-sm text-muted">12 hour ago</span>
                  <h5 class="text-body mb-2">Challenge invitation</h5>
                  <p class="mb-2">
                    <span class="text-dark">Jonny aber</span> invites to join the challenge
                  </p>
                  <button class="btn btn-sm btn-outline-secondary me-2">Decline</button>
                  <button class="btn btn-sm btn-primary">Accept</button>
                </div>
              </div>
            </BCard>
          </BDropdownText>
          <BDropdownText text-class="p-0">
            <BCard class="mb-0">
              <div class="d-flex">
                <div class="flex-shrink-0">
                  <img
                    class="img-radius avatar rounded-0"
                    src="@/assets/images/user/avatar-5.jpg"
                    alt="Generic placeholder image"
                  />
                </div>
                <div class="flex-grow-1 ms-3">
                  <span class="float-end text-sm text-muted">5 hour ago</span>
                  <h5 class="text-body mb-2">Security</h5>
                  <p class="mb-0">
                    Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                    when an unknown printer took a galley of type and scrambled it to make a type
                  </p>
                </div>
              </div>
            </BCard>
          </BDropdownText>
        </div>
      </SimpleBar>
      <BDropdownText text-class="text-center py-2 px-0">
        <a href="#!" class="link-danger">Clear all Notifications</a>
      </BDropdownText>
    </BDropdown>
  </li>
</template>
