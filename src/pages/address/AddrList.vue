<template>
  <nut-address-list :data="data" long-press :show-bottom-button="false" @del-icon="delClick" @edit-icon="editClick"
    @click-item="clickItem" @long-copy="copyClick" @long-set="setClick" @long-del="delClickLong"
    :data-options="dataOptions">
  </nut-address-list>
</template>
<script setup>
const data = ref([
  {
    testid: 3,
    testaddressName: '姓名',
    phone: '123****4567',
    defaultAddress: false,
    fullAddress: '北京市通州区测试测试测试测试测试测试测试测试测试'
  },
  {
    testid: 4,
    testaddressName: '姓名',
    phone: '123****4567',
    defaultAddress: true,
    fullAddress: '北京市通州区测试测试测试测试测试测试测试测试测试'
  }
])
const dataOptions = reactive({
  id: 'testid',
  addressDetail: 'testaddressDetail',
  addressName: 'testaddressName'
})
const clickItem = () => {
  console.log('Click To Address')
}
const delClick = () => {
  console.log('Click To Delete')
}
const editClick = () => {
  console.log('Click To Edit')
}
const copyClick = () => {
  console.log('Click To Copy')
}
const setClick = () => {
  console.log('Click On Settings')
}
const delClickLong = () => {
  console.log('Click To Add')
}
</script>
