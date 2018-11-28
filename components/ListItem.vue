<template>
  <section class='flex'>
    <!-- Left -->
    <section>
      <slot name='image'></slot>
    </section>
    <!-- Right -->
    <section class='pl-3 flex flex-col justify-center'>
      <slot name='title'></slot>
      <slot name='description'></slot>
    </section>
  </section>
</template>

