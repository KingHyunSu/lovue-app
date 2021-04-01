import React, {Component} from 'react';
import {FlatList, Image, StyleSheet, TouchableOpacity,Text, View} from 'react-native';
import {actions} from './const';

export const defaultActions = [
  actions.keyboard,
  actions.setBold,
  actions.setItalic,
  actions.setUnderline,
  actions.removeFormat,
  actions.insertBulletsList,
  actions.indent,
  actions.outdent,
  actions.insertLink,
];

function getDefaultIcon() {
  console.log('tqt',JSON.stringify(actions))
  const texts = {};
  // new icon styles of experiment
  texts[actions.insertImage] = require('./img/image.png');
  texts[actions.setBold] = require('./img/bold.png');
  texts[actions.setStrikethrough] = require('./img/strikethrough.png');
  texts[actions.setUnderline] = require('./img/underline.png');
  texts[actions.insertVideo] = require('./img/video.png');
  return texts;
}

export default class RichToolbar extends Component {
    // static propTypes = {
    //   getEditor?: PropTypes.func.isRequired,
    //   editor?: PropTypes.object,
    //   actions: PropTypes.array,
    //   onPressAddImage: PropTypes.func,
    //   onInsertLink: PropTypes.func,
    //   selectedButtonStyle: PropTypes.object,
    //   itemStyle: PropTypes.object,
    //   iconTint: PropTypes.any,
    //   selectedIconTint: PropTypes.any,
    //   unselectedButtonStyle: PropTypes.object,
    //   disabledButtonStyle: PropTypes.object,
    //   disabledIconTint: PropTypes.any,
    //   iconMap: PropTypes.object,
    //   disabled: PropTypes.bool,
    // };

    // static defaultProps = {
    //     actions: defaultActions,
    //     disabled: false,
    //     iconTint: '#71787F',
    //     iconSize: 20,
    //     iconGap: 16,
    // };

    constructor(props) {
        super(props);
        this.editor = null;
        this.state = {
            selectedItems: [],
        };
    }

    shouldComponentUpdate(nextProps, nextState) {
        let that = this;
        return (
            nextProps.actions !== that.props.actions ||
            nextState.selectedItems !== that.state.selectedItems ||
            nextState.actions !== that.state.actions ||
            nextState.data !== that.state.data ||
            nextState.style !== that.props.style
        );
    }

    static getDerivedStateFromProps(nextProps, prevState) {
        const {actions} = nextProps;
        if (actions !== prevState.actions) {
            let {selectedItems = []} = prevState;
            return {
                actions,
                data: actions.map((action) => ({action, selected: selectedItems.includes(action)})),
            };
        }
        return null;
    }

    componentDidMount() {
        setTimeout(this._mount);
    }

    _mount = () => {
        const {editor: {current: editor} = {current: this.props?.getEditor()}} = this.props;
        if (!editor) {
            throw new Error('Toolbar has no editor!');
        } else {
            editor.registerToolbar((selectedItems) => this.setSelectedItems(selectedItems));
            this.editor = editor;
        }
    };

    setSelectedItems(items) {
        const {selectedItems} = this.state;
        if (this.editor && items !== selectedItems) {
            this.setState({
                items,
                data: this.state.actions.map((action) => ({action, selected: items.includes(action)})),
            });
        }
    }

    _getButtonSelectedStyle() {
        return this.props.selectedButtonStyle && this.props.selectedButtonStyle;
    }

    _getButtonUnselectedStyle() {
        return this.props.unselectedButtonStyle && this.props.unselectedButtonStyle;
    }

    _getButtonDisabledStyle() {
        return this.props.disabledButtonStyle && this.props.disabledButtonStyle;
    }

    _getButtonIcon(action) {
        const {iconMap} = this.props;
        if (iconMap && iconMap[action]) {
            return iconMap[action];
        } else {
            return getDefaultIcon()[action];
        }
    }

    handleKeyboard() {
        const editor = this.editor;
        if (!editor) return;
        if (editor.isKeyboardOpen) {
            editor.dismissKeyboard();
        } else {
            editor.focusContentEditor();
        }
    }

    _onPress(action) {
        const {onPressAddImage, onInsertLink, insertVideo} = this.props;
        const editor = this.editor;
        if (!editor) return;

        switch (action) {
            case actions.insertLink:
                if (onInsertLink) return onInsertLink();
            case actions.setBold:
            case actions.setItalic:
            case actions.undo:
            case actions.redo:
            case actions.insertBulletsList:
            case actions.insertOrderedList:
            case actions.checkboxList:
            case actions.setUnderline:
            case actions.heading1:
            case actions.heading2:
            case actions.heading3:
            case actions.heading4:
            case actions.heading5:
            case actions.heading6:
            case actions.code:
            case actions.blockquote:
            case actions.line:
            case actions.setParagraph:
            case actions.removeFormat:
            case actions.alignLeft:
            case actions.alignCenter:
            case actions.alignRight:
            case actions.alignFull:
            case actions.setSubscript:
            case actions.setSuperscript:
            case actions.setStrikethrough:
            case actions.setHR:
            case actions.indent:
            case actions.outdent:
                editor.showAndroidKeyboard();
                editor.sendAction(action, 'result');
                break;
            case actions.insertImage:
                onPressAddImage && onPressAddImage();
                break;
            case actions.insertVideo:
                insertVideo && insertVideo();
                break;
            case actions.keyboard:
                this.handleKeyboard();
                break;
            default:
                this.props[action] && this.props[action]();
                break;
        }
    }

    _defaultRenderAction(action, selected) {
        let that = this;
        const icon = that._getButtonIcon(action);
        const {iconSize, iconGap, disabled, itemStyle} = that.props;
        const style = selected ? that._getButtonSelectedStyle() : that._getButtonUnselectedStyle();
        const tintColor = disabled
            ? that.props.disabledIconTint
            : selected
            ? that.props.selectedIconTint
            : that.props.iconTint;
        return (
            <TouchableOpacity
                key={action}
                disabled={disabled}
                style={[{width: iconGap + iconSize}, styles.item, itemStyle, style]}
                onPress={() => that._onPress(action)}>
                {icon ? (
                    typeof icon === 'function' ? (
                        icon({selected, disabled, tintColor, iconSize, iconGap})
                    ) : (
                        <Image
                            source={icon}
                            style={{
                                tintColor,
                                height: iconSize,
                                width: iconSize,
                            }}
                        />
                    )
                ) : null}
            </TouchableOpacity>
        );
    }

    _renderAction(action, selected) {
        return this._defaultRenderAction(action, selected);
    }

  render() {
    let that = this
    // const tintColor = disabled
    // ? that.props.disabledIconTint
    // : selected
    // ? that.props.selectedIconTint
    // : that.props.iconTint;
    
    const {style, disabled, children, flatContainerStyle} = this.props;
    const vStyle = [styles.barContainer, style, disabled && this._getButtonDisabledStyle()];
    const click = this.state.data
    return (
        <View style={styles.barContainer}>
          {/* <Text>{JSON.stringify(this.state.data)}</Text> */}
            {/* <FlatList
                horizontal
                keyboardShouldPersistTaps={'always'}
                keyExtractor={(item, index) => item.action + '-' + index}
                data={this.state.data}
                alwaysBounceHorizontal={false}
                showsHorizontalScrollIndicator={false}
                renderItem={({item}) => this._renderAction(item.action, item.selected)}
                contentContainerStyle={flatContainerStyle}
            /> */}
                <View style={styles.barItemBox}>
                    <TouchableOpacity
                        style={{marginRight: 16}}
                        key={'quote'}
                        onPress={() => that._onPress('quote')}>
                        <Image
                        source={require('./img/blockquote.png')}
                        style={{
                            height: 22,
                            width: 22,
                        }}
                        />
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={{marginRight: 16}}
                        key={'bold'}
                        onPress={() => that._onPress('bold')}>
                        <Image
                        source={require('./img/bold.png')}
                        style={{
                            height: 22,
                            width: 22,
                        }}
                        />
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={{marginRight: 16}}
                        key={'strikeThrough'}
                        onPress={() => that._onPress('strikeThrough')}>
                        <Image
                        source={require('./img/strikethrough.png')}
                        style={{
                            height: 22,
                            width: 22,
                        }}
                        />
                    </TouchableOpacity>
                    <TouchableOpacity
                        key={'underline'}
                        onPress={() => that._onPress('underline')}>
                        <Image
                        source={require('./img/underline.png')}
                        style={{
                            height: 22,
                            width: 22,
                        }}
                        />
                    </TouchableOpacity>
                </View>

                <View style={styles.barItemBox}>
                  <TouchableOpacity
                    style={{marginRight: 16}}
                    key={'image'}
                    onPress={() => that._onPress('image')}>
                    <Image
                      source={require('./img/image.png')}
                      style={{
                          height: 22,
                          width: 22,
                      }}
                    />
                  </TouchableOpacity>
                  <TouchableOpacity
                    key={'video'}
                    onPress={() => that._onPress('video')}>
                    <Image
                      source={require('./img/video.png')}
                      style={{
                          height: 22,
                          width: 22,
                      }}
                    />
                  </TouchableOpacity>
                  {/* <Text>
                    {JSON.stringify(this.props)}
                  </Text> */}
                </View>
            {children}
        </View>
    );
  }
}

const styles = StyleSheet.create({
  barContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: 44,
    backgroundColor: '#efefef',
    paddingHorizontal: 16
  },
  barItemBox: {
    flexDirection: 'row'
  },

  item: {
    justifyContent: 'center',
    alignItems: 'center',
  },
});
