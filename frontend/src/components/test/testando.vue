<template>
  <PickList v-model="cars" listStyle="height:342px" dataKey="vin">
    <template #sourceHeader>
        Available
    </template>
    <template #targetHeader>
        Selected
    </template>
    <template #item="slotProps">
        <div class="p-caritem">
            <div>{{slotProps.cars.brand}} - {{slotProps.cars.year}} - {{slotProps.cars.color}}</div>
        </div>
    </template>
</PickList>

</template>

<script>
export default {
     data() {
        return {
            cars: [
        {"brand": "Volkswagen", "year": 2012, "color": "Orange", "vin": "dsad231ff"},
        {"brand": "Audi", "year": 2011, "color": "Black", "vin": "gwregre345"},
        {"brand": "Renault", "year": 2005, "color": "Gray", "vin": "h354htr"},
        {"brand": "BMW", "year": 2003, "color": "Blue", "vin": "j6w54qgh"},
        {"brand": "Mercedes", "year": 1995, "color": "Orange", "vin": "hrtwy34"},
        {"brand": "Volvo", "year": 2005, "color": "Black", "vin": "jejtyj"},
        {"brand": "Honda", "year": 2012, "color": "Yellow", "vin": "g43gr"},
        {"brand": "Jaguar", "year": 2013, "color": "Orange", "vin": "greg34"},
        {"brand": "Ford", "year": 2000, "color": "Black", "vin": "h54hw5"},
        {"brand": "Fiat", "year": 2013, "color": "Red", "vin": "245t2s"}
    ]
        }
    }
}

</script>

<style>
.p-caritem {
    &:after {
        content: "";
        display: table;
        clear: both;
    }

    img {
        display:inline-block;
        margin:2px 0 2px 2px;
        width: 48px;
        height: 48px;
    }

    div {
        font-size:14px;
        float:right;
        margin: 16px 6px 0 0;
    }
}
</style>