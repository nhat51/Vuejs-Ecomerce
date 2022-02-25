<template>
  <a-table :pagination="false"  :columns="columns" :data-source="data">
    <a slot="name" slot-scope="text">{{ text }}</a>
    <span slot="customTitle"> Id</span>
    <span slot="status" slot-scope="status">
      <a-tag
          :key="status"
          :color="status === 'REJECT' ? 'volcano' : status === 'CONFIRM' ? 'geekblue' : 'green'"
      >
        {{ status.toUpperCase() }}
      </a-tag>
    </span>
    <span slot="payment" slot-scope="payment_status">
      <a-tag
          :key="payment_status"
          :color="payment_status === 'UNPAID' ? 'volcano' : payment_status.length > 5 ? 'geekblue' : 'green'"
      >
        {{ payment_status.toUpperCase() }}
      </a-tag>
    </span>
  </a-table>
</template>
<script>


const columns = [
  {
    dataIndex: 'id',
    key: 'id',
    slots: { title: 'customTitle' },
    scopedSlots: { customRender: 'id' },
  },
  {
    title: 'Amount',
    dataIndex: 'amount',
    key: 'amount',
  },
  {
    title: 'Message',
    dataIndex: 'message',
    key: 'message',
  },
  {
    title: 'Order Id',
    dataIndex: 'order_id',
    key: 'order_id',
  },
  {
    title: 'Payment Type',
    dataIndex: 'payment_type',
    key: 'payment_type',
  },
  {
    title: 'Receive id',
    key: 'receive_id',
    dataIndex: 'receive_id',
    scopedSlots: { customRender: 'status' },
  },
  {
    title: 'Sender id',
    key: 'payment_status',
    dataIndex: 'payment_status',
    scopedSlots: { customRender: 'payment' },
  },
  {
    title: 'Status',
    key: 'payment_status',
    dataIndex: 'payment_status',
    scopedSlots: { customRender: 'payment' },
  }
];

export default {
  data() {
    return {
      columns,
      data: []
    };
  },
  created() {

  },
  methods:{

  }
};
</script>
