<template>
  <div :class="`form-control w-full ${containerStyle} `">
    <label class="text-sm mb-1">
      <span
        :class="
          error ? 'text-error' : `label-text text-base-content ${labelStyle}`
        "
        >{{ label }}</span
      >
    </label>
    <!-- :value="value" -->
    <input
      v-maska
      :bind="inputRef"
      :type="type"
      :placeholder="placeholder"
      :value="modelValue ? modelValue : value"
      @input="updateValue"
      class="input input-bordered w-full bordered"
      :class="error ? 'input-error ' : `${color} ${bgColor}`"
      :data-maska="mask"
      :data-tokens="tokens"
      :data-maska-reversed="reversed"
      :data-maska-eager="eager"
      :ref="options ? 'inputRef' : undefined"
      :max="max"
      :min="0"
    />
    <div class="text-error text-xs" v-if="error">
      {{ error }}
    </div>
  </div>
</template>

<script setup lang="ts">
import type { MaskTokens, MaskType } from "maska";
import { useField } from "vee-validate";
import {
  useCurrencyInput,
  type CurrencyInputOptions,
} from "vue-currency-input";

const props = defineProps({
  label: String,
  labelStyle: String,
  type: {
    type: String,
    default: "text",
  },
  containerStyle: String,
  value: {
    type: [String, Number],
  },
  error: {
    default: undefined,
    type: String,
  },
  placeholder: {
    type: String,
    default: "",
  },
  updateType: String,
  color: {
    type: String,
    default: "base-content",
  },
  bgColor: {
    type: String,
    default: "base-100",
  },
  name: {
    type: String,
    default: "",
  },
  // to use mask
  mask: { type: String as () => MaskType },
  tokens: { type: Object as () => MaskTokens },
  tokensReplace: { type: Boolean },
  eager: { type: Boolean },
  reversed: { type: Boolean },
  max: { type: Number },
  modelValue: { type: [String, Number] },
  // to use currency
  options: Object as () => CurrencyInputOptions,
});
const defaltValues = {
  currency: "BRL",
  locale: "pt-BR",
  autoDecimalDigits: true,
  hideCurrencySymbolOnFocus: false,
  hideGroupingSeparatorOnFocus: false,
  valueRange: { min: 0 },
};

const { value: valueField, setValue } = useField(() => props.name);
const { inputRef } = useCurrencyInput({
  ...defaltValues,
  ...props.options,
});
const emit = defineEmits(["update:modelValue"]);

function updateValue(e: Event) {
  const target = e.target as HTMLInputElement;
  setValue(target.value);
  emit("update:modelValue", valueField.value);
}
</script>
