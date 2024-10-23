import React from 'react';
import { Modal, View, Text, TouchableOpacity } from 'react-native';

interface FilterModalProps {
  visible: boolean;
  handleDisplay: () => void;
}

const FilterModal: React.FC<FilterModalProps> = ({
  visible,
  handleDisplay
}) => {
  return (
    <Modal
      transparent={true}
      animationType="slide"
      visible={visible}
      onRequestClose={handleDisplay}
    >
      <View className="flex-1 justify-end">
        <View className="bg-white rounded-t-lg py-10 px-8">
          <Text className="text-lg font-bold">Filters</Text>
          <TouchableOpacity>
            <Text>Alive</Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Text>Dead</Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Text>Unknown</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={handleDisplay} className="mt-4">
            <Text className="text-blue-500">Close</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
};

export default FilterModal;
