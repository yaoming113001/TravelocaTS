import React from "react"
import { Text, FlatList } from "react-native"
import { Container } from "../styles/container"
import { Overlay, Button } from "react-native-elements";
import { ISearchItem } from "../types/search_item";
import { useSelectInput } from "./base_select.store"
import { ISelectProps } from "./base_select_props";
import { BaseInput } from "../base_input/base_input";
import styles from "./base_select.style"

export const BaseSelect: React.FunctionComponent<ISelectProps> = props => {
  const { isShow, toggle } = useSelectInput()

  const itemRender = (item: ISearchItem) => {
    return (
      <Button
        onPress={() => props.onSelect(item.value)}
        title={item.value}
        type={item.value === props.value ? "outline" : "clear"}
      />
    )
  }

  const listRender = () => {
    return (
      <FlatList
        data={props.data}
        bounces={false}
        keyExtractor={item => item.key}
        renderItem={({ item }) => itemRender(item)}
      />
    )
  }

  const selectedOverplay = () => {
    return (
      <Overlay isVisible={isShow}
        onBackdropPress={toggle}
        backdropStyle={styles.backdrop}
        overlayStyle={styles.overPlay}
        animationType="slide">
        <Container>
          <Text style={styles.title}>Select option</Text>
          {listRender()}
        </Container>
      </Overlay>
    )

  }

  return (
    <>
      <BaseInput
        value={props.value}
        onPress={toggle}
        dontShowKeyboard={true}
        placeholder={props.placeholder}
        error={props.error}
        onLostFocus={() => props.onLostFocus}
      />
      {selectedOverplay()}
    </>
  );
}
