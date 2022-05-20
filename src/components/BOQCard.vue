<template>
  <div class="col-3">
    <router-link
      class="link"
      :to="{ name: 'boq_template_selection', params: { id: user.id } }"
    >
      <div class="cards_wrap">
        <div class="card_item">
          <div class="card_inner">
            <div class="role_name">
              <b>Project {{ user.name }}</b>
            </div>
          </div>
        </div>
      </div>
    </router-link>
  </div>
</template>
<script>
export default {
  name: "boq_card",
  props: {
    user: {
      type: Object,
      required: true,
    },
  },
};
</script>

<style scoped>
.cards_wrap {
  padding: 20px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
}

.cards_wrap .card_item {
  width: 100%;
  box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);
}

.cards_wrap .card_inner {
  background: #fff;
  border-radius: 5px;
  border: 1px solid black;
  min-width: 225px;
  min-height: 315px;
  max-height: 370px;
  width: 100%;
}

.cards_wrap .card_item .role_name {
  padding-top: 20px;
  color: #ea971a;
  font-weight: 900;
  letter-spacing: 2px;
  text-transform: uppercase;
  /* font-size: 20px; */
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.cards_wrap .card_item .real_name {
  color: #745042;
  /* font-size: 12px; */
  font-weight: 100;
  margin: 5px 0 10px;
}

.cards_wrap .card_item .film {
  font-size: 14px;
  line-height: 24px;
  color: #7b8ca0;
}

@media screen and (max-width: 1024px) {
  .cards_wrap .card_item {
    width: 33%;
  }
}

@media screen and (max-width: 768px) {
  .cards_wrap .card_item {
    width: 50%;
  }
  .wrapper .header {
    font-size: 16px;
    height: 60px;
  }
}

@media screen and (max-width: 568px) {
  .cards_wrap .card_item {
    width: 100%;
  }
  .wrapper .header {
    font-size: 14px;
  }
}
/* .card {
  border: 1px solid black;
  padding: 30px;
  margin: 10px 42px;
  cursor: grab;
} */

.link {
  color: #2c3e50;
  text-decoration: none;
}
</style>
