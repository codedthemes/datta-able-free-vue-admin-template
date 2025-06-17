<script setup lang="ts">
import { ref, shallowRef } from 'vue'

// third party
import { BRow, BCol } from 'bootstrap-vue-next'

// common components
import BaseBreadcrumb from '@/components/shared/BaseBreadcrumb.vue'
import ComponentContent from '@/components/shared/ComponentContent.vue'
import CardHeader from '@/components/shared/CardHeader.vue'

const page = ref({ title: 'Typography' })
const breadcrumbs = shallowRef([{ text: 'Basic UI' }, { text: 'Typography' }])
</script>

<template>
  <BaseBreadcrumb :title="page.title" :breadcrumbs="breadcrumbs" />
  <ComponentContent
    content="Documentation and examples for Bootstrap typography, including global settings, headings, body text, lists, and more."
    link="https://getbootstrap.com/docs/5.2/content/typography/"
  />
  <BRow>
    <!-- [ Typography ] start -->
    <BCol sm="12">
      <CardHeader
        title="Headings"
        caption=".h1 through .h6 classes are also available, for when you want to match the font styling of a heading but cannot use the associated HTML element."
      >
        <h1>h1. Heading</h1>
        <h2>h2. Heading</h2>
        <h3>This is a H3</h3>
        <h4>This is a H4</h4>
        <h5>This is a H5</h5>
        <h6>This is a H6</h6>
      </CardHeader>
    </BCol>
    <BCol sm="12">
      <CardHeader title="Display Headings">
        <h1 class="display-1">Display 1</h1>
        <h1 class="display-2">Display 2</h1>
        <h1 class="display-3">Display 3</h1>
        <h1 class="display-4">Display 4</h1>
        <h1 class="display-5">Display 5</h1>
        <h1 class="display-6">Display 6</h1>
      </CardHeader>
    </BCol>
    <BCol md="6">
      <CardHeader title="Inline Text Elements">
        <p class="lead m-t-0">Your title goes here</p>
        You can use the mark tag to
        <mark>highlight</mark> text.
        <br />
        <del>This line of text is meant to be treated as deleted text.</del>
        <br />
        <ins>This line of text is meant to be treated as an addition to the document.</ins>
        <br />
        <strong>rendered as bold text</strong>
        <br />
        <em>rendered as italicized text</em>
      </CardHeader>
    </BCol>
    <BCol md="6">
      <CardHeader title="Contextual Text Colors">
        <p class="text-muted mb-1">Fusce dapibus, tellus ac cursus commodo, tortor mauris nibh.</p>
        <p class="text-primary mb-1">Nullam id dolor id nibh ultricies vehicula ut id elit.</p>
        <p class="text-success mb-1">
          Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
        </p>
        <p class="text-info mb-1">
          Maecenas sed diam eget risus varius blandit sit amet non magna.
        </p>
        <p class="text-warning mb-1">Etiam porta sem malesuada magna mollis euismod.</p>
        <p class="text-danger mb-1">Donec ullamcorper nulla non metus auctor fringilla.</p>
        <p class="text-dark mb-1">Nullam id dolor id nibh ultricies vehicula ut id elit.</p>
      </CardHeader>
    </BCol>
    <BCol md="6" lg="4">
      <CardHeader title="Unordered">
        <ul>
          <li>Lorem ipsum dolor sit amet</li>
          <li>Consectetur adipiscing elit</li>
          <li>Integer molestie lorem at massa</li>
          <li>Facilisis in pretium nisl aliquet</li>
          <li>
            Nulla volutpat aliquam velit
            <ul>
              <li>Phasellus iaculis neque</li>
              <li>Purus sodales ultricies</li>
              <li>Vestibulum laoreet porttitor sem</li>
              <li>Ac tristique libero volutpat at</li>
            </ul>
          </li>
          <li>Faucibus porta lacus fringilla vel</li>
          <li>Aenean sit amet erat nunc</li>
          <li>Eget porttitor lorem</li>
        </ul>
      </CardHeader>
    </BCol>
    <BCol md="6" lg="4">
      <CardHeader title="Ordered">
        <ol>
          <li>Lorem ipsum dolor sit amet</li>
          <li>Consectetur adipiscing elit</li>
          <li>Integer molestie lorem at massa</li>
          <li>Facilisis in pretium nisl aliquet</li>
          <li>
            Nulla volutpat aliquam velit
            <ul>
              <li>Phasellus iaculis neque</li>
              <li>Purus sodales ultricies</li>
              <li>Vestibulum laoreet porttitor sem</li>
              <li>Ac tristique libero volutpat at</li>
            </ul>
          </li>
          <li>Faucibus porta lacus fringilla vel</li>
          <li>Aenean sit amet erat nunc</li>
          <li>Eget porttitor lorem</li>
        </ol>
      </CardHeader>
    </BCol>
    <BCol md="12" lg="4">
      <CardHeader title="Unstyled">
        <ul class="list-unstyled">
          <li>Lorem ipsum dolor sit amet</li>
          <li>
            Integer molestie lorem at massa
            <ul>
              <li>Phasellus iaculis neque</li>
            </ul>
          </li>
          <li>Faucibus porta lacus fringilla vel</li>
          <li>Eget porttitor lorem</li>
        </ul>
        <h5>Inline</h5>
        <hr />
        <ul class="list-inline m-b-0">
          <li class="list-inline-item">Lorem ipsum</li>
          <li class="list-inline-item">Phasellus iaculis</li>
          <li class="list-inline-item">Nulla volutpat</li>
        </ul>
      </CardHeader>
    </BCol>
    <BCol md="6">
      <CardHeader title="Blockquotes">
        <p class="text-muted mb-1">Your awesome text goes here.</p>
        <blockquote class="blockquote">
          <p class="mb-2">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.
          </p>
          <footer class="blockquote-footer">
            Someone famous in <cite title="Source Title">Source Title</cite>
          </footer>
        </blockquote>
        <p class="text-muted m-b-15 m-t-20">
          Add <code>.text-end</code> for a blockquote with right-aligned content.
        </p>
        <blockquote class="blockquote text-end">
          <p class="mb-2">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.
          </p>
          <footer class="blockquote-footer">
            Someone famous in <cite title="Source Title">Source Title</cite>
          </footer>
        </blockquote>
      </CardHeader>
    </BCol>
    <BCol md="6">
      <CardHeader title="Horizontal Description">
        <dl class="dl-horizontal row">
          <dt class="col-sm-3">Description lists</dt>
          <dd class="col-sm-9">A description list is perfect for defining terms.</dd>

          <dt class="col-sm-3">Euismod</dt>
          <dd class="col-sm-9">
            Vestibulum id ligula porta felis euismod semper eget lacinia odio sem nec elit.
          </dd>
          <dd class="col-sm-9">Donec id elit non mi porta gravida at eget metus.</dd>

          <dt class="col-sm-3">Malesuada porta</dt>
          <dd class="col-sm-9">Etiam porta sem malesuada magna mollis euismod.</dd>

          <dt class="col-sm-3 text-truncate">Truncated term is truncated</dt>
          <dd class="col-sm-9">
            Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum
            massa justo sit amet risus.
          </dd>
        </dl>
      </CardHeader>
    </BCol>
    <!-- [ Typography ] end -->
  </BRow>
</template>
