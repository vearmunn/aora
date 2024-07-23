import {
  View,
  Text,
  FlatList,
  Image,
  RefreshControl,
  Alert,
} from "react-native";
import React from "react";
import { useState, useEffect } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { images } from "../../constants";
import SearchField from "../../components/SearchField";
import EmptyState from "../../components/EmptyState";
import Trending from "../../components/Trending";
import { getAllPosts, getLatestPosts } from "../../lib/appwrite";
import { useAppwrite } from "../../lib/useAppwrite";
import VideoCard from "../../components/VideoCard";

const Home = () => {
  const [refreshing, setRefreshing] = useState();

  const { data: posts, isLoading, refetch } = useAppwrite(getAllPosts);
  const { data: latestPosts } = useAppwrite(getLatestPosts);

  const onRefresh = async () => {
    setRefreshing(true);
    await refetch();
    setRefreshing(false);
  };

  // console.log(posts);

  return (
    <SafeAreaView className="bg-primary h-full">
      <FlatList
        data={posts ?? []}
        keyExtractor={(item) => item.$id}
        ListHeaderComponent={
          <View className="px-4 h-fit">
            <View className="flex-row justify-between ">
              <View>
                <Text className=" text-gray-300 font-pregular">
                  Welcome back
                </Text>
                <Text className="text-3xl font-psemibold text-white">USER</Text>
              </View>
              <Image
                source={images.logoSmall}
                className="w-12 h-12"
                resizeMode="contain"
              />
            </View>
            <SearchField />
            <View className="w-full my-5 flex-1">
              <Text className="text-gray-300 text-lg mb-4">Latest Videos</Text>
              <Trending posts={latestPosts} />
            </View>
          </View>
        }
        renderItem={({ item }) => (
         <VideoCard item={item}/>
        )}
        ListEmptyComponent={
          <EmptyState
            title="No videos found"
            subtitle="Be the first one to upload!"
          />
        }
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }
      />
    </SafeAreaView>
  );
};

export default Home;
