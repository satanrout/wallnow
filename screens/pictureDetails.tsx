import React from "react";
import { View, Text, Image } from "react-native";
import { ActivityIndicator } from "react-native-paper";
import { Colors } from "react-native/Libraries/NewAppScreen";
import { useQuery } from "react-query";
import { useGetPhotoDetailsQuery } from "../redux/services/photos";

export default function PictureDetails({ route, navigation }) {
  const { id } = route.params;
  const { data, error, isLoading } = useGetPhotoDetailsQuery(id);
  console.log(data);
  if (isLoading)
    return <ActivityIndicator animating={true} color={Colors.red800} />;
  if (data)
    return (
      <View>
        <Image
          style={{ width: "100%", height: "100%" }}
          resizeMode="contain"
          source={{ uri: data?.src?.large2x }}
        />
      </View>
    );
}
