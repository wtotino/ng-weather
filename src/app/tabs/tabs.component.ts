import { Component, EventEmitter, Input, Output, TemplateRef } from '@angular/core';

export interface TabModel {
	content: TemplateRef<any>;
	data: any;
	title: string;
}

/**
 * Component that holds an array of tabs and manages switching from one tab to another, showing the currently active tab in a container
 * 
 */
@Component({
	selector: 'app-tabs',
	templateUrl: './tabs.component.html',
	styleUrls: ['./tabs.component.css']
})
export class TabsComponent {
	public tabsValue: TabModel[] = [];

	@Input() public set tabs(value: TabModel[]) {
		// We reset the array and the activeTab then use the method addTabs that includes all the logic for adding one or more tabs
		this.tabsValue.length = 0;
		const activeTab = this.activeTab;
		this.activeTab = null;
		this.addTabs(...value);

		//After we add all the tabs we check if the previously active tab is still in the array and in that case select it
		const found = this.tabsValue.find(t => t === activeTab);

		//the addTabs will change to the first value in the array but if we have found a previously selected tab we put it back
		if(found) {
			this.activeTab = found;
		}
	}

	@Output() public tabChanged: EventEmitter<TabModel> = new EventEmitter();

	public activeTab: TabModel;

	@Input() public tabContainer: TemplateRef<any>;
	@Input() public tabLink: TemplateRef<any>;

	/**
	 * Changes the currently active tab to the one passed
	 */
	public changeTab(tab: TabModel) {
		// Just to make sure we are changing to one of the tabs handled by the component
		if(this.tabsValue.includes(tab)) {
			this.setTab(tab);
		}
	}

	private setTab(tab: TabModel) {
		this.activeTab = tab;
		this.tabChanged.emit(tab);
	}

	/**
	 * Adds one or more tabs
	 */
	public addTabs(...tabs: TabModel[]) {
		const emptyTabs = this.tabsValue.length === 0;
		this.tabsValue.push(...tabs);

		// If we previously had no tabs we switch to the first one in the array
		if(emptyTabs && this.tabsValue.length > 0) {
			this.changeTab(this.tabsValue[0]);
		}
	}

	/**
	 * Removes a tab from the array
	 */
	public removeTab(tab: TabModel) {
		const index = this.tabsValue.indexOf(tab);
		if (index !== -1) {
			this.tabsValue.splice(index, 1);
		}

		// if we are removing the currently active tab we go back to the first one
		if (this.activeTab === tab && this.tabsValue?.length > 0) {
			this.changeTab(this.tabsValue[0]);
		} else if(this.tabsValue?.length === 0) {
			// If there's no more tabs in the array we clear the activeTab
			this.setTab(null);
		}
	}
}
